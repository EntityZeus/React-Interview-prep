import './PageNotFound.css';
import img from '../../assets/Page-not-found-1.jpg';

const PageNotFound = () => {
    return (
        <div className="page-not-found-container">
            <img src={img} alt="Page Not Found"/>
        </div>
    )
}

export default PageNotFound;