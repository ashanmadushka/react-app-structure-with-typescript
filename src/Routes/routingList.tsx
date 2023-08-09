import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from "../Pages/dashboard"
import { ShowCustomers } from '../Pages/showCustomers';
import { ShowProducts } from '../Pages/showProducts';

const routes = [
    {
        path: '/',
        component: Dashboard,
        key: '/',
    },
    {
        path: '/initial-setup/company-group',
        component: ShowCustomers,
        key: '/initial-setup/company-group',
    },
    {
        path: '/initial-setup/Payment-option',
        component: ShowProducts,
        key: '/initial-setup/Payment-option',
    },
    {
        path: '/initial-setup/department',
        component: ShowProducts,
        key: '/initial-setup/department',
    },
    {
        path: '/initial-setup/designation',
        component: ShowProducts,
        key: '/initial-setup/designation',
    },
    {
        path: '/initial-setup/template-type',
        component: ShowProducts,
        key: '/initial-setup/template-type',
    },
    {
        path: '/initial-setup/leave-type',
        component: ShowProducts,
        key: '/initial-setup/leave-type',
    },
    {
        path: '/initial-setup/holiday',
        component: ShowProducts,
        key: '/initial-setup/holiday',
    },
    {
        path: '/initial-setup/work-flow',
        component: ShowProducts,
        key: '/initial-setup/work-flow',
    },
    {
        path: '/initial-setup/email-template',
        component: ShowProducts,
        key: '/initial-setup/email-template',
    },
    {
        path: '/initial-setup/user-rights',
        component: ShowProducts,
        key: '/initial-setup/user-rights',
    },
    {
        path: '/initial-setup/news',
        component: ShowProducts,
        key: '/initial-setup/news',
    },
    {
        path: '/service-setup/service-user',
        component: ShowProducts,
        key: '/service-setup/service-user',
    },
    {
        path: '/service-setup/client-service-user',
        component: ShowProducts,
        key: '/service-setup/client-service-user',
    },
    {
        path: '/service-setup/supplier',
        component: ShowProducts,
        key: '/service-setup/supplier',
    },
    {
        path: '/clients/registered-clients',
        component: ShowProducts,
        key: '/clients/registered-clients',
    },
    {
        path: '/clients/onboarding-clients',
        component: ShowProducts,
        key: '/clients/onboarding-clients',
    },
    {
        path: '/clients/prospect-clients',
        component: ShowProducts,
        key: '/clients/prospect-clients',
    },
    {
        path: '/missing-information/awaiting-approval',
        component: ShowProducts,
        key: '/missing-information/awaiting-approval',
    },
    {
        path: '/missing-information/property-view',
        component: ShowProducts,
        key: '/missing-information/property-view',
    },
    {
        path: '/missing-information/client-view',
        component: ShowProducts,
        key: '/missing-information/client-view',
    },
    {
        path: '/invoicing/invoice-preparation',
        component: ShowProducts,
        key: '/invoicing/invoice-preparation',
    },
    {
        path: '/invoicing/invoicing',
        component: ShowProducts,
        key: '/invoicing/invoicing',
    },
    {
        path: '/invoicing/credit-control/status-report',
        component: ShowProducts,
        key: '/invoicing/credit-control/status-report',
    },
    {
        path: '/invoicing/credit-control/client-report',
        component: ShowProducts,
        key: '/invoicing/credit-control/client-report',
    },
    {
        path: '/invoicing/credit-control/invoice-type-report',
        component: ShowProducts,
        key: '/invoicing/credit-control/invoice-type-report',
    },
    {
        path: '/invoicing/credit-control/unsend-report',
        component: ShowProducts,
        key: '/invoicing/credit-control/unsend-report',
    },
    {
        path: '/invoicing/credit-control/unpaid-report',
        component: ShowProducts,
        key: '/invoicing/credit-control/unpaid-report',
    },
    {
        path: '/invoicing/credit-control/paid-report',
        component: ShowProducts,
        key: '/invoicing/credit-control/paid-report',
    },
    {
        path: '/ad-hoc-services',
        component: ShowProducts,
        key: '/ad-hoc-services',
    },
    {
        path: '/help-desk/create-task',
        component: ShowProducts,
        key: '/help-desk/create-task',
    },
    {
        path: '/help-desk/my-task',
        component: ShowProducts,
        key: '/help-desk/my-task',
    },
    {
        path: '/help-desk/mobile-request',
        component: ShowProducts,
        key: '/help-desk/mobile-request',
    },
    {
        path: '/help-desk/forms-to-clients',
        component: ShowProducts,
        key: '/help-desk/forms-to-clients',
    },
    {
        path: '/help-desk/manage-diary',
        component: ShowProducts,
        key: '/help-desk/manage-diary',
    },
    {
        path: '/hr/leave',
        component: ShowProducts,
        key: '/hr/leave',
    },
    {
        path: '/hr/permission',
        component: ShowProducts,
        key: '/hr/permission',
    },
    {
        path: '/hr/time-sheet',
        component: ShowProducts,
        key: '/hr/time-sheet',
    },
    {
        path: '/hr/reports/time-sheet',
        component: ShowProducts,
        key: '/hr/reports/time-sheet',
    },
    {
        path: '/hr/reports/leave',
        component: ShowProducts,
        key: '/hr/reports/leave',
    },
    {
        path: '/hr/reports/permission',
        component: ShowProducts,
        key: '/hr/reports/permission',
    },
    {
        path: '/user-management/manage-user',
        component: ShowProducts,
        key: '/user-management/manage-user',
    },
    {
        path: '/user-management/user-rights',
        component: ShowProducts,
        key: '/user-management/user-rights',
    },
    {
        path: '/report/service-status',
        component: ShowProducts,
        key: '/report/service-status',
    },
    {
        path: '/report/service-client',
        component: ShowProducts,
        key: '/report/service-client',
    },
    {
        path: '/report/month-wise',
        component: ShowProducts,
        key: '/report/month-wise',
    },
    {
        path: '/report/missing-info',
        component: ShowProducts,
        key: '/report/missing-info',
    },
    {
        path: '/report/client-status',
        component: ShowProducts,
        key: '/report/client-status',
    },
    {
        path: '/report/onboarding',
        component: ShowProducts,
        key: '/report/onboarding',
    },
    {
        path: '/client-comunication/bulk-mail',
        component: ShowProducts,
        key: '/client-comunication/bulk-mail',
    },
    {
        path: '/client-comunication/bulk-sms',
        component: ShowProducts,
        key: '/client-comunication/bulk-sms',
    },
    {
        path: '/client-comunication/other-business-association',
        component: ShowProducts,
        key: '/client-comunication/other-business-association',
    },
    {
        path: '/wiki/article-group',
        component: ShowProducts,
        key: '/wiki/article-group',
    },
    {
        path: '/wiki/article',
        component: ShowProducts,
        key: '/wiki/article',
    },
    {
        path: '/company-house/company-eligibility',
        component: ShowProducts,
        key: '/company-house/company-eligibility',
    },
    {
        path: '/company-house/company-formation',
        component: ShowProducts,
        key: '/company-house/company-formation',
    },
    {
        path: '/company-house/dompany-overview',
        component: ShowProducts,
        key: '/company-house/dompany-overview',
    },
    {
        path: '/company-house/confimation-statement-filing',
        component: ShowProducts,
        key: '/company-house/confimation-statement-filing',
    },
    {
        path: '/company-house/ch-filing-history',
        component: ShowProducts,
        key: '/company-house/ch-filing-history',
    },
    {
        path: '/hrmc/hrmc-64-8',
        component: ShowProducts,
        key: '/hrmc/hrmc-64-8',
    },
    {
        path: '/hrmc/vat-validator',
        component: ShowProducts,
        key: '/hrmc/vat-validator',
    },
];

function RoutingList() {
    return (
        <div>
            {
                routes.map(item => {
                    console.log('ssssssss', item.path.split('/').length)
                    // if (item.path.split('/').length === 2) {
                        return (
                            <Routes key={item.path}>
                                <Route
                                    //   exact={true}
                                    path={item.path}
                                    Component={item.component}
                                    key={item.key}
                                />
                            </Routes>
                        );
                    // }
                    // return 
                    // <Routes>
                    //     <Route path={item.path} Component={item.component} key={item.key} />
                    // </Routes>;
                })
            }
        </div>
    )
    
}

export default  RoutingList;