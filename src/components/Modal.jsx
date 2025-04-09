import React from 'react';
import { Link } from 'react-router-dom';

// Renamed function to English standard
function GameModal({ isOpen, onClose, game }) {
  if (!isOpen) return null;

  return (
    // Overlay
    <div className="fixed inset-0 bg-black bg-opacity-60 z-40 flex justify-center items-center p-4">
      {/* Modal Content */}
      <div className="bg-gradient-to-br from-gray-700 to-gray-800 text-white rounded-lg shadow-xl p-6 max-w-lg w-full relative z-50 border border-yellow-500/50">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-yellow-400 text-2xl font-bold"
          aria-label="Close modal"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-4 text-yellow-400">{game.title} - Overview</h2>
        <p className="text-gray-300 mb-2">
            <strong>Genre(s):</strong> {game.genre.join(', ')}
        </p>
        <p className="text-gray-300 mb-4">
            <strong>Developer:</strong> {game.developer}
        </p>
        {/* Using text-gray-400 for slightly less emphasis */}
        <p className="text-gray-400 text-sm mb-6">{game.description.substring(0, 150)}...</p>

        <div className="flex justify-end space-x-3">
           <button
             onClick={onClose}
             className="px-4 py-2 bg-gray-600 text-gray-100 rounded hover:bg-gray-500 transition duration-150"
           >
             Close
           </button>
           <Link
             to={`/details/${game.id}`}
             state={{ gameData: game }} // Pass game data via route state
             className="px-4 py-2 bg-yellow-600 text-black rounded hover:bg-yellow-500 font-semibold transition duration-150"
           >
             View Full Details
           </Link>
        </div>
      </div>
    </div>
  );
}

// Export with the new name
export default GameModal; 