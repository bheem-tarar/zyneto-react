import React from "react";

const AdvanceTen = () => {
    const tableData = [
        {
            id: "#4910",
            status: "paid",
            client: {
                name: "Jordan Stevenson",
                email: "Layne_Kuvalis@gmail.com",
                avatar: "JS",
                image: "src/assets/1.png"
            },
            total: "$3428",
            balance: "Paid"
        },
        {
            id: "#4909",
            status: "pending",
            client: {
                name: "Richard Payne",
                email: "richard_payne@gmail.com",
                avatar: "RP",
                image: "../src/assets/2.png"
            },
            total: "$2872",
            balance: "$883"
        },
        {
            id: "#4908",
            status: "downloading",
            client: {
                name: "Jennifer Summers",
                email: "jennifer_summers@gmail.com",
                avatar: "JS",
                image: "../src/assets/5.png"
            },
            total: "$4077",
            balance: "Paid"
        },
        {
            id: "#4908",
            status: "downloading",
            client: {
                name: "Jennifer Summers",
                email: "jennifer_summers@gmail.com",
                avatar: "JS",
                image: "../src/assets/5.png"
            },
            total: "$4077",
            balance: "Paid"
        }
    ];

    const getStatusIcon = (status) => {
        switch (status) {
            case "paid":
                return (
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                );
            case "pending":
                return (
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                );
            case "downloading":
                return (
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                        </svg>
                    </div>
                );
            default:
                return null;
        }
    };

    const getAvatarColor = (name) => {
        const colors = [
            "bg-blue-500",
            "bg-red-500",
            "bg-green-500",
            "bg-purple-500",
            "bg-orange-500"
        ];
        return colors[name.length % colors.length];
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen max-w-7xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th className="text-left py-3 px-6 text-sm font-medium text-gray-700 uppercase tracking-wider">
                                # ID
                            </th>
                            <th className="text-left py-3 px-6 text-sm font-medium text-gray-700 uppercase tracking-wider">
                                STATUS
                            </th>
                            <th className="text-left py-3 px-6 text-sm font-medium text-gray-700 uppercase tracking-wider">
                                CLIENT
                            </th>
                            <th className="text-left py-3 px-6 text-sm font-medium text-gray-700 uppercase tracking-wider">
                                TOTAL
                            </th>
                            <th className="text-left py-3 px-6 text-sm font-medium text-gray-700 uppercase tracking-wider">
                                BALANCE
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {tableData.map((row, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="py-4 px-6 text-sm">
                                    <span className="text-blue-600 font-medium">{row.id}</span>
                                </td>
                                <td className="py-4 px-6 text-sm">
                                    {getStatusIcon(row.status)}
                                </td>
                                <td className="py-4 px-6 text-sm">
                                    <div className="flex items-center">
                                        <div
                                            className={`w-10 h-10 rounded-full overflow-hidden mr-3 ${getAvatarColor(row.client.name)}`}
                                        >
                                            <img
                                                src={row.client.image} 
                                                alt={row.client.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <div className="text-xl font-medium text-gray-900">{row.client.name}</div>
                                            <div className=" text-gray-500 text-xl">{row.client.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-4 px-6 text-lg font-medium text-gray-900">
                                    {row.total}
                                </td>
                                <td className="py-4 px-6 text-lg">
                                    {row.balance === "Paid" ? (
                                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                                            Paid
                                        </span>
                                    ) : (
                                        <span className="font-medium text-gray-900">{row.balance}</span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdvanceTen;