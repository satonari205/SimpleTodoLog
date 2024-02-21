import { FC } from "react";
import { Post } from "../../types/IPost";

interface Props {
  key: number;
  post: Post;
}

const Post: FC<Props> = () => {
  const showDetail = () => { alert('dummy') };

  return(
    <>
      <div
        className="card bg-base-100 shadow-xl hover:bg-base-200 animate-slide-in-bottom"
        onClick={showDetail}
      >
        <div className="card-body p-4">
          {/* <h2 className="card-title">Card title!</h2> */}
          <p className="line-clamp-3">If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
    </>
  );
}

export default Post;