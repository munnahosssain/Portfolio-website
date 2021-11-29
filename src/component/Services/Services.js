import './Services.css'
import { Card } from 'react-bootstrap';

const Services = () => {
    const data = [
        {
            id: "1",
            title: "Web Design",
            icon: "https://i.ibb.co/yWzvBGB/web-Design.png",
            desc: "I approach each individually and always focus on the result.",
        },
        {
            id: "2",
            title: "Web Development",
            icon: "https://i.ibb.co/DK4b621/R.png",
            desc: "Your website will be build with an new proven technologies.",
        },
        {
            id: "3",
            title: "Responsive Design",
            icon: "https://i.ibb.co/HK36rbk/pc-Tab-Mobile.png",
            desc: "I will create web site that are consistent in quality across a variety of devices and screen sizes.",
        },
        {
            id: "4",
            title: "Wordpress Design",
            icon: "https://i.ibb.co/5RBhqds/wordpress.png",
            desc: "Your website will be build with wordpress technologies.",
        },

    ]
    return (
        <div id="services" className="services">
            <h1 class="serviced-h1">my services</h1>
            <div className="container">
                <div className="row">
                    {
                        data.map(dt =>
                            <Card className="serviced-title" style={{ width: '18rem' }}>
                                <Card.Img className="service-icon" variant="top" src={dt.icon} />
                                <Card.Body>
                                    <Card.Title>{dt.title}</Card.Title>
                                    <Card.Text>{dt.desc}</Card.Text>
                                </Card.Body>
                            </Card>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;