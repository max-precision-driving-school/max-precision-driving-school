import { Helmet } from 'react-helmet';

const Meta = ({ title, description, image, keywords }) => {
    const defTitle = "Max Precision Driving School";
    const defDescription = "Learn to drive with confidence and max precision";
    const defkeywords = "driving, school, astoria, ny, auto, drive";


    return (
        <Helmet>
            <title>{title || defTitle}</title>
            <meta name="description" content={description || defDescription} />
            <meta name="keywords" content={keywords || defkeywords} />
            <meta property="og:title" content={title || defTitle} />
            <meta property="og:description" content={description || defDescription} />
        </Helmet>
    );
};


export default Meta;