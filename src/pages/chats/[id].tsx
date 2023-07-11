import type { NextPage } from "next";

const ChatDetail: NextPage = () => {
    return (
        <div className="py-10 px-4 space-y-4">
            <div className="flex items-start space-x-2">
                <div className="w-8 h-8 rounded-full bg-slate-400" />
                <div className="w-1/2 text-sm text-gray-700 p-2 border-gray-300 border rounded-md">안녕하세요. 얼마에 파시나요?</div>
            </div>
            <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
                <div className="w-8 h-8 rounded-full bg-slate-400" />
                <div className="w-1/2 text-sm text-gray-700 p-2 border-gray-300 border rounded-md">네고 없이 ￦20,000입니다.</div>
            </div>
            <div className="flex items-start space-x-2">
                <div className="w-8 h-8 rounded-full bg-slate-400" />
                <div className="w-1/2 text-sm text-gray-700 p-2 border-gray-300 border rounded-md">좋아요</div>
            </div>
            <div className="fixed w-full mx-auto max-w-md bottom-2 inset-x-0">
                <div className="flex relative items-center">
                    <input type="text" className="shadow-sm rounded-full pr-12 w-full border-gray-300 focus:ring-orange-500 focus:outline-none focus:border-orange-500" />
                    <div className="absolute inset-y-0 flex py-1.5 pr-1.5 right-0">
                        <button className="flex items-center focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 hover:bg-orange-600 bg-orange-500 rounded-full px-3 text-sm text-white">&rarr;</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatDetail;