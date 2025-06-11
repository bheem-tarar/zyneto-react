import React from "react";
import { MessageCircle, Eye, Share2 } from "lucide-react";

const Blog2 = ({ cards }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
            {cards.map((card, index) => (
                <div
                    key={index}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
                >
                    <div className="relative h-48 overflow-hidden">
                        <div 
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${card.cover})` }}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    </div>

                    <div className="p-6">
                        <div className="flex items-center mb-4">
                            <img
                                src={card.avatar}
                                alt="avatar"
                                className="w-10 h-10 rounded-full border-2 border-gray-200"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'flex';
                                }}
                            />
                            <div className="w-10 h-10 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center overflow-hidden" style={{display: 'none'}}>
                                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full"></div>
                            </div>
                            <span className="ml-3 text-gray-500 text-sm">{card.date}</span>
                        </div>

                        <h2 className="text-xl font-bold text-gray-800 mb-4 leading-tight">
                            {card.title}
                        </h2>

                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center">
                                <MessageCircle className="w-4 h-4 mr-1" />
                                <span>{card.comments}</span>
                            </div>
                            <div className="flex items-center">
                                <Eye className="w-4 h-4 mr-1" />
                                <span>{card.views}</span>
                            </div>
                            <div className="flex items-center">
                                <Share2 className="w-4 h-4 mr-1" />
                                <span>{card.shares}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Blog2;