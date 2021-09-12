import './Services.css'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faDesktop, faFileCode } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    return (
        <div class="bg-color">
            <h1 class="mt-5 mb-5">my services</h1>
            <div class="container">
                <div class="row row-cols-1 row-cols-md-4 g-4">
                    <div class="col">
                        <div class="card-body text-center">
                            <FontAwesomeIcon icon={faDesktop} />
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">ead-in to additional content.This content is a little bit longer.</p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card-body text-center">
                            <FontAwesomeIcon icon={faFileCode} />
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a short card.</p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card-body text-center">
                            <i class="fab fa-wordpress-simple"></i>
                            {/* <FontAwesomeIcon icon={ } /> */}
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card-body text-center">
                            <i class="fab faFacebook"></i>
                            {/* <FontAwesomeIcon icon={faFacebookF} /> */}
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a short card.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;