import React from 'react'
import { Helmet } from'react-helmet';

// Import components
import InquiryForm from '../components/InquiryForm';

export default function inquiry() {
    return (
        <div>
            <Helmet>
                <title>
                    Inquiries - Conrad Trost
                </title>
            </Helmet>

            <InquiryForm />
        </div>
    )
}
