import { Card } from "../../components/Card/Card";
import { posts } from "../../Items";
import './Home.css';

export const Home = () => {
    return (
        <div className="home">
            {posts.map(post=> (
                <Card key={post.id} post={post}/>
            ))}
        </div>
    )
}
