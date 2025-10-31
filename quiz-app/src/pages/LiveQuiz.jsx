import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Clock, Users, Trophy, AlertTriangle, Pause, Play } from 'lucide-react';
import QuizCard from '../components/Quiz/QuizCard';
import QuizProgress from '../components/Quiz/QuizProgress';
import QuizResults from '../components/Quiz/QuizResults';
import QuizLeaderboard from '../components/Quiz/QuizLeaderboard';
import { quizContests, leaderboardData } from '../data/quizData';

const LiveQuiz = () => {
  const { contestId } = useParams();
  const navigate = useNavigate();
  const [contest, setContest] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [timeStarted, setTimeStarted] = useState(null);
  const [timeFinished, setTimeFinished] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const foundContest = quizContests.find(c => c.id === parseInt(contestId));
    if (!foundContest) {
      navigate('/contests');
      return;
    }
    setContest(foundContest);
    setTotalScore(foundContest.questions.reduce((sum, q) => sum + q.points, 0));
  }, [contestId, navigate]);

  const startQuiz = () => {
    setQuizStarted(true);
    setTimeStarted(new Date());
  };

  const handleAnswer = useCallback((selectedAnswer, isCorrect) => {
    const currentQuestion = contest.questions[currentQuestionIndex];
    const answerData = {
      questionIndex: currentQuestionIndex,
      selectedAnswer,
      isCorrect,
      points: isCorrect ? currentQuestion.points : 0,
      time: new Date()
    };

    setAnsweredQuestions(prev => [...prev, answerData]);
    
    if (isCorrect) {
      setScore(prev => prev + currentQuestion.points);
      setCorrectAnswers(prev => prev + 1);
    }

    // Move to next question after delay
    setTimeout(() => {
      if (currentQuestionIndex < contest.questions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        finishQuiz();
      }
    }, 2000);
  }, [currentQuestionIndex, contest]);

  const handleTimeUp = useCallback(() => {
    const answerData = {
      questionIndex: currentQuestionIndex,
      selectedAnswer: null,
      isCorrect: false,
      points: 0,
      time: new Date(),
      timeUp: true
    };

    setAnsweredQuestions(prev => [...prev, answerData]);

    // Move to next question after delay
    setTimeout(() => {
      if (currentQuestionIndex < contest.questions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        finishQuiz();
      }
    }, 1000);
  }, [currentQuestionIndex, contest]);

  const finishQuiz = () => {
    setQuizFinished(true);
    setTimeFinished(new Date());
  };

  const retryQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setCorrectAnswers(0);
    setAnsweredQuestions([]);
    setQuizFinished(false);
    setTimeStarted(new Date());
    setTimeFinished(null);
  };

  const getTimeTaken = () => {
    if (!timeStarted || !timeFinished) return '0:00';
    const diff = (timeFinished - timeStarted) / 1000; // in seconds
    const minutes = Math.floor(diff / 60);
    const seconds = Math.floor(diff % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const togglePause = () => {
    setIsPaused(prev => !prev);
  };

  if (!contest) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading quiz...</p>
        </div>
      </div>
    );
  }

  if (quizFinished) {
    return (
      <QuizResults
        score={score}
        totalScore={totalScore}
        totalQuestions={contest.questions.length}
        correctAnswers={correctAnswers}
        timeTaken={getTimeTaken()}
        contest={contest}
        onRetry={retryQuiz}
      />
    );
  }

  if (!quizStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              {contest.title}
            </h1>
            <p className="text-xl text-gray-600">
              Get ready to test your knowledge!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Quiz Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-3xl border border-gray-200 shadow-lg p-8">
                <h2 className="text-2xl font-black text-gray-900 mb-6">Quiz Details</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <span className="font-semibold text-gray-700">Category</span>
                      <span className="font-bold text-gray-900">{contest.category}</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <span className="font-semibold text-gray-700">Difficulty</span>
                      <span className={`font-bold ${
                        contest.difficulty === 'Easy' ? 'text-green-600' :
                        contest.difficulty === 'Medium' ? 'text-yellow-600' :
                        'text-red-600'
                      }`}>
                        {contest.difficulty}
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <span className="font-semibold text-gray-700">Questions</span>
                      <span className="font-bold text-gray-900">{contest.totalQuestions}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <span className="font-semibold text-gray-700">Duration</span>
                      <span className="font-bold text-gray-900">{Math.floor(contest.duration / 60)} min</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <span className="font-semibold text-gray-700">Total Points</span>
                      <span className="font-bold text-gray-900">{totalScore}</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <span className="font-semibold text-gray-700">Entry Fee</span>
                      <span className={`font-bold ${
                        contest.entryFee === 'Free' ? 'text-green-600' : 'text-gray-900'
                      }`}>
                        {contest.entryFee}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Instructions */}
              <div className="bg-yellow-50 rounded-3xl border border-yellow-200 p-6">
                <h3 className="text-lg font-black text-yellow-800 mb-4 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Important Instructions
                </h3>
                <ul className="space-y-2 text-yellow-700">
                  <li>• Each question has a time limit</li>
                  <li>• Points are awarded for correct answers</li>
                  <li>• You cannot go back to previous questions</li>
                  <li>• The quiz will auto-submit when time expires</li>
                  <li>• Ensure stable internet connection</li>
                </ul>
              </div>
            </div>

            {/* Start Section */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-6 text-white text-center">
                <Trophy className="w-12 h-12 mx-auto mb-4" />
                <div className="text-3xl font-black mb-2">{contest.prizePool}</div>
                <div className="text-blue-100 font-semibold">Prize Pool</div>
              </div>

              <div className="bg-white rounded-3xl border border-gray-200 shadow-lg p-6 text-center">
                <button
                  onClick={startQuiz}
                  className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 mb-4"
                >
                  Start Quiz Now
                </button>
                <p className="text-sm text-gray-600">
                  {contest.participants} participants joined
                </p>
              </div>

              <QuizLeaderboard leaderboard={leaderboardData} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = contest.questions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Quiz Area */}
          <div className="lg:col-span-3">
            <QuizCard
              question={currentQuestion}
              questionNumber={currentQuestionIndex + 1}
              totalQuestions={contest.questions.length}
              onAnswer={handleAnswer}
              onTimeUp={handleTimeUp}
            />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quiz Controls */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm font-semibold text-gray-700">Quiz Controls</div>
                <button
                  onClick={togglePause}
                  className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
                </button>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Score</span>
                  <span className="font-bold text-gray-900">{score}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Correct</span>
                  <span className="font-bold text-green-600">{correctAnswers}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Progress</span>
                  <span className="font-bold text-gray-900">
                    {currentQuestionIndex + 1}/{contest.questions.length}
                  </span>
                </div>
              </div>
            </div>

            {/* Progress */}
            <QuizProgress
              currentQuestion={currentQuestionIndex + 1}
              totalQuestions={contest.questions.length}
              answeredQuestions={answeredQuestions}
            />

            {/* Live Leaderboard */}
            <QuizLeaderboard 
              leaderboard={leaderboardData}
              currentUserScore={{
                score: score,
                rank: 6 // This would be calculated based on actual ranking
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveQuiz;