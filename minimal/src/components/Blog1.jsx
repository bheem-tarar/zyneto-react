import React from "react";
import { MessageCircle, Eye, Share2 } from "lucide-react";



const Blog1 = ({ cards }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
            {cards.map((card, index) => (
                <div
                    key={index}
                    className={`rounded-2xl overflow-hidden shadow-lg relative text-white 
            ${index === 0 ? "lg:col-span-2" : "lg:col-span-1"}`}
                >
                    <div
                        className="h-70 bg-cover bg-center relative"
                        style={{ backgroundImage: `url(${card.cover})` }}
                    >
                        <div className="h-full w-full  flex flex-col justify-end p-4">
                            <div className="absolute top-4 left-4">
                                <img
                                    src={card.avatar}
                                    alt="avatar"
                                    className="w-10 h-10 rounded-full border-2 border-white"
                                />
                            </div>
                            <p className="text-xs text-gray-300 mb-1">{card.date}</p>
                            <h3 className="text- font-semibold leading-snug">{card.title}</h3>
                            <div className="flex items-center justify-end gap-4 mt-4 text-sm text-gray-300">
                                <div className="flex items-center gap-1">
                                    <MessageCircle className="w-4 h-4" />
                                    <span>{card.comments}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Eye className="w-4 h-4" />
                                    <span>{card.views}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Share2 className="w-4 h-4" />
                                    <span>{card.shares}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default Blog1;





