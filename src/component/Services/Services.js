import './Services.css'
import React from 'react';

const Services = () => {
    return (
        <div id="services" class="bg-color">
            <h1 class="mb-5 text-center serviced fw-normal">my services</h1>
            <div class="container">
                <div class="row row-cols-1 row-cols-md-4 g-4">
                    <div class="col">
                        <div class="card-body text-center serviced-titles">
                            <i class="fas fa-desktop fa-icon"></i>
                            <h3 class="card-title fw-normal">Web Design</h3>
                            <p class="card-text">I approach each individually and always focus on the result.</p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card-body text-center serviced-titles">
                            <i class="fas fa-code fa-icon"></i>
                            <h3 class="card-title fw-normal">Web Development</h3>
                            <p class="card-text">Your website will be build with an new proven technologies.</p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card-body text-center serviced-titles">
                            <i class="fab fa-wordpress-simple fa-icon"></i>
                            <h3 class="card-title fw-normal">Wordpress Website</h3>
                            <p class="card-text">Your website will be build with wordpress technologies.</p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card-body text-center serviced-titles">
                            <i class="fab fa-facebook fa-icon"></i>
                            <h3 class="card-title fw-normal">Facebook Ads</h3>
                            <p class="card-text">Your potential clients well your services or product on Facebook.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;