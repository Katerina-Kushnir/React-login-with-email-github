import { Link } from 'react-router-dom';
import './Card.css';

export const Card = ({post}) => {
    return (
        <div className='card'>
            <Link className="link" to={`/post/${post.id}`}>
                <span className="title">{post.title}</span>
                <img src={post.img} alt="" />
                <p className="desc">{post.desc}</p>
                <button type='button' className='cardButton'>Read more</button>
            </Link>
        </div>
    );
};