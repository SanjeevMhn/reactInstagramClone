import React from 'react';

const PostCard = (props) => {
    const { user, img, likes, description } = props;
    return (
        <article className="post-card pb-3 w-[95%] md:w-[75%] lg:w-[40%] max-w-[470px]">
            <div className="inner-container w-full border-gray-300 rounded-lg border overflow-hidden">
                <div className="post-header py-2 px-3 bg-white flex justify-between">
                    <div className="poster-info flex items-center">
                        <div className="poster-profile h-[42px] w-[42px] relative flex items-center justify-center">
                            <div className="img-container h-full w-full overflow-hidden rounded-full">
                                <img src={user.profile_img} alt="" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="poster-data flex flex-col ml-2">
                            <span className="poster-name text-[15px] font-medium">{user.name}</span>
                            <span className="poster-location text-[12px] font-light">{user.location}</span>
                        </div>
                    </div>
                    <div className="options-container flex items-center gap-2">
                        <div className="follow-user-container">
                            <button className="follow-user bg-[#00a2f8] text-white text-sm leading-none h-full py-3 px-4 rounded-lg">
                                <p className="label-text">Follow</p>
                            </button>
                        </div>
                        <button className="options">
                            <div className="icon-container w-[25px] h-[25px] flex items-center justify-center">
                                <ion-icon name="ellipsis-horizontal"></ion-icon>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="media-container relative pt-[100%] bg-black">
                    <img src={img} alt="" className="absolute top-0 left-0 w-full h-full object-contain" />
                </div>
                <div className="post-footer">
                    <div className="post-actions">
                        <ul className="action-list flex w-full">
                            <li className="list-item">
                                <button className="icon-container w-[40px] h-[40px] flex items-center justify-center text-2xl">
                                    <ion-icon name="heart-outline"></ion-icon>
                                </button>
                            </li>
                            <li className="list-item">
                                <button className="icon-container w-[40px] h-[40px] flex items-center justify-center text-2xl">
                                    <ion-icon name="chatbubble-outline"></ion-icon>
                                </button>
                            </li>
                            <li className="list-item">
                                <button className="icon-container w-[40px] h-[40px] flex items-center justify-center text-2xl">
                                    <ion-icon name="paper-plane-outline"></ion-icon>
                                </button>
                            </li>
                            <li className="list-item ml-auto">
                                <button className="icon-container w-[40px] h-[40px] flex items-center justify-center text-2xl">
                                    <ion-icon name="bookmark-outline"></ion-icon>
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="likes-counter px-3 text-[13px] font-semibold text-gray-700">
                        {likes} likes
                    </div>
                    <div className="post-caption-data text-[13px] px-3">
                        <span className="poster-name font-semibold">
                            {user.name}&nbsp;&nbsp;<span className="post-caption font-light">
                                {description}
                            </span>
                        </span>
                    </div>
                    <button className="view-comments pb-2 px-3 text-[13px] text-gray-700">
                        View all 30 comments
                    </button>
                    <div className="posted-time text-xs text-gray-600 px-3 pb-2">10 MINUTES AGO</div>
                    <div className="add-comment border-t border-gray-300 pl-2 pr-3 py-2 flex items-center">
                        <button className="emoji-container mr-2">
                            <div className="icon-container flex items-center justify-center text-[28px]">
                                <ion-icon name="happy-outline"></ion-icon>
                            </div>
                        </button>
                        <input type="text" name="comment" id="" className='text-sm flex-grow focus:outline-none' placeholder='Add comment' />
                        <button className="text-sm text-blue-300 font-semibold">Post</button>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default PostCard;