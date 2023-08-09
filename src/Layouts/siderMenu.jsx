import React from 'react';
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import styles from './Less/style.less';
import { ReactComponent as Dashboard } from '../Assest/Svg/Dashboard.svg';
import { ReactComponent as InitialSetup } from '../Assest/Svg/InitialSetup.svg';
import { ReactComponent as ServiceSetup } from '../Assest/Svg/ServiceSetup.svg';
import { ReactComponent as ClientIcon } from '../Assest/Svg/ClientIcon.svg';
import { ReactComponent as ServicesIcon } from '../Assest/Svg/ServicesIcon.svg';
import { ReactComponent as MissingInformationIcon } from '../Assest/Svg/MissingInformationIcon.svg';
import { ReactComponent as InvoiceIcon } from '../Assest/Svg/InvoiceIcon.svg';
import { ReactComponent as AdHocServiceIcon } from '../Assest/Svg/AdHocServiceIcon.svg';
import { ReactComponent as HelpDeskIcon } from '../Assest/Svg/HelpDeskIcon.svg';
import { ReactComponent as HrIcon } from '../Assest/Svg/HrIcon.svg';
import { ReactComponent as UserIcon } from '../Assest/Svg/UserIcon.svg';
import { ReactComponent as ReportIcon } from '../Assest/Svg/ReportIcon.svg';
import { ReactComponent as ClientCommunicationIcon } from '../Assest/Svg/ClientCommunicationIcon.svg';
import { ReactComponent as WikiIcon } from '../Assest/Svg/WikiIcon.svg';
import { ReactComponent as CompanyHouseIcon } from '../Assest/Svg/CompanyHouseIcon.svg';
import { ReactComponent as HmrcIcon } from '../Assest/Svg/HmrcIcon.svg';

const { SubMenu } = Menu;

const { Sider } = Layout;

function SiderMenu({ handleOnCollapse, collapsed }) {
  const theme = 'light';

  const navigate = useNavigate();

  const handleSiderMenuClick = action => {
    console.log('menu:', action);
    switch (action.key) {
        case 'dashboard':
            navigate('/');
            break;
        case 'groupAndPartners':
            navigate('/initial-setup/company-group');
            break;
        case 'bankDetails':
            navigate('/initial-setup/Payment-option');
            break;
        case 'departments':
            navigate('/initial-setup/department');
            break;
        case 'staffDesignations':
            navigate('/initial-setup/designation');
            break;
        case 'templateType':
            navigate('/initial-setup/template-type');
            break;
        case 'leaveType':
            navigate('/initial-setup/leave-type');
            break;
        case 'holiday':
            navigate('/initial-setup/holiday');
            break;
        case 'workFlow':
            navigate('/initial-setup/work-flow');
            break;
        case 'emailTemplate':
            navigate('/initial-setup/email-template');
            break;
        case 'userRights':
            navigate('/initial-setup/user-rights');
            break;
        case 'dashboardNews':
            navigate('/initial-setup/news');
            break;
        case 'serviceUser':
            // navigate('/ServiceConfiguration/ServiceSetup');
            navigate('/service-setup/service-user');
            break;
        case 'clientServiceUser':
            // navigate('/ServiceConfiguration/ServiceClient');
            navigate('/service-setup/client-service-user');
            break;
        case 'supplier':
            // navigate('/InitialSetup/Supplier');
            navigate('/service-setup/supplier');
            break;
        case 'registeredClients':
            // navigate('/ClientCompany/Index');
            navigate('/clients/registered-clients');
            break;
        case 'onboardingClients':
            // navigate('/ClientCompany/Onboard');
            navigate('/clients/onboarding-clients');
            break;
        case 'prospectClients':
            // navigate('/Prospect/Index');
            navigate('/clients/prospect-clients');
            break;
        case 'awaitingApproval':
            // navigate('/');
            navigate('/missing-information/awaiting-approval');
            break;
        case 'propertyView':
            // navigate('/MissedInfo/index');
            navigate('/missing-information/property-view');
            break;
        case 'clientView':
            // navigate('/MissedInfo/ClientView');
            navigate('/missing-information/client-view');
            break;
        case 'invoicePreparation':
            // navigate('/Invoice/InvoicePreparation');
            navigate('/invoicing/invoice-preparation');
            break;
        case 'invoicing':
            // navigate('/Invoice/Index');
            navigate('/invoicing/invoicing');
            break;
        case 'statusReport':
            // navigate('/Report/ReportParam?rt=3');
            navigate('/invoicing/credit-control/status-report');
            break;
        case 'clientReport':
            // navigate('Report/ReportParam?rt=4');
            navigate('/invoicing/credit-control/client-report');
            break;
        case 'invoiceTypeReport':
            // navigate('/Report/InvoiceServiceList');
            navigate('/invoicing/credit-control/invoice-type-report');
            break;
        case 'unsendReport':
            // navigate('/Report/InvoiceUnsend');
            navigate('/invoicing/credit-control/unsend-report');
            break;
        case 'unpaidReport':
            // navigate('/Report/InvoiceUnpaid');
            navigate('/invoicing/credit-control/unpaid-report');
            break;
        case 'paidReport':
            // navigate('/Report/InvoicePaid');
            navigate('/invoicing/credit-control/paid-report');
            break;
        case 'adHocServices':
            // navigate('/ServiceProcess/Other');
            navigate('/ad-hoc-services');
            break;
        case 'createTask':
            // navigate('/Task/Index');
            navigate('/help-desk/create-task');
            break;
        case 'myTask':
            // navigate('/Task/MyTask');
            navigate('/help-desk/my-task');
            break;
        case 'mobileRequest':
            // navigate('/');
            navigate('/help-desk/mobile-request');
            break;
        case 'formToClients':
            // navigate('/Management/FormAmendment');
            navigate('/help-desk/forms-to-clients');
            break;
        case 'manageDiary':
            // navigate('/Management/ManageDiary');
            navigate('/help-desk/manage-diary');
            break;
        case 'leave':
            // navigate('/Leave/index');
            navigate('/hr/leave');
            break;
        case 'permission':
            // navigate('/Leave/index');
            navigate('/hr/permission');
            break;
        case 'timesheet':
            // navigate('/Timesheet/index');
            navigate('/hr/time-sheet');
            break;
        case 'reportTimesheet':
            // navigate('/Report/ReportParam');
            navigate('/hr/reports/time-sheet');
            break;
        case 'reportLeave':
            // navigate('/Report/Leave');
            navigate('/hr/reports/leave');
            break;
        case 'reportPermission':
            // navigate('/Report/Permission');
            navigate('/hr/reports/permission');
            break;
        case 'manageUsers':
            // navigate('/UserManagement/UserInformation');
            navigate('/user-management/manage-user');
            break;
        case 'userRights':
            navigate('/user-management/user-rights');
            break;
        case 'serviceStatus':
            // navigate('/Report/ReportParam?rt=1');
            navigate('/report/service-status');
            break;
        case 'serviceClient':
            // navigate('/Report/ReportParam?rt=2');
            navigate('/report/service-client');
            break;
        case 'monthWise':
            // navigate('/Home/MonthwiseSearch');
            navigate('/report/month-wise');
            break;
        case 'missingInfo':
            navigate('/report/missing-info');
            break;
        case 'clientStatus':
            navigate('/report/client-status');
            break;
        case 'onboarding':
            navigate('/report/onboarding');
            break;
        case 'bulkMail':
            // navigate('/Management/BulkMail');
            navigate('/client-comunication/bulk-mail');
            break;
        case 'bulkSms':
            // navigate('/Management/BulkSMS');
            navigate('/client-comunication/bulk-sms');
            break;
        case 'otherBusinessAssociated':
            // navigate('/InitialSetup/OtherPerson');
            navigate('/client-comunication/other-business-association');
            break;
        case 'articalGroup':
            navigate('/wiki/article-group');
            break;
        case 'artical':
            navigate('/wiki/article');
            break;
        case 'companyEligibility':
            // navigate('/CompanyHouse/Availability');
            navigate('/company-house/company-eligibility');
            break;
        case 'companyFormation':
            // navigate('/CompanyHouse/CompanyList');
            navigate('/company-house/company-formation');
            break;
        case 'companyOverview':
            // navigate('/ConfirmationStatement/ClientwiseIndividual');
            navigate('/company-house/dompany-overview');
            break;
        case 'confirmationStatementFiling':
            // navigate('/ConfirmationStatement/Clientwise');
            navigate('/company-house/confimation-statement-filing');
            break;
        case 'chFilingHistory':
            // navigate('/ConfirmationStatement/FilingHistory');
            navigate('/company-house/ch-filing-history');
            break;
        case 'hmrc648':
            // navigate('/');
            navigate('/hrmc/hrmc-64-8');
            break;
        case 'vatValidator':
            navigate('/hrmc/vat-validator');
            break;
        default:
            navigate('/');
    }
  };

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="90"
      onCollapse={handleOnCollapse}
      collapsed={collapsed}
      width="320"
      theme={theme}
    >
        <Menu mode="inline" onClick={handleSiderMenuClick}>
            <Menu.Item key="dashboard">
                <Dashboard />
                <span className={styles.navText}>Dashboard</span>
            </Menu.Item>
            <SubMenu
                key="initialSetup"
                title={
                    <span>
                        <InitialSetup />
                        <span className={styles.navText}>Initial Set up</span>
                    </span>
                }
            >
                <Menu.Item key="groupAndPartners">
                    <span className={styles.navText}>- Group & Partners</span>
                </Menu.Item>
                <Menu.Item key="bankDetails">
                    <span className={styles.navText}>- Bank Details</span>
                </Menu.Item>
                <Menu.Item key="departments">
                    <span className={styles.navText}>- Departments</span>
                </Menu.Item>
                <Menu.Item key="staffDesignations">
                    <span className={styles.navText}>- Staff Designations</span>
                </Menu.Item>
                <Menu.Item key="templateType">
                    <span className={styles.navText}>-Template Type</span>
                </Menu.Item>
                <Menu.Item key="leaveType">
                    <span className={styles.navText}>- Leave Type</span>
                </Menu.Item>
                <Menu.Item key="holiday">
                    <span className={styles.navText}>- Holiday</span>
                </Menu.Item>
                <Menu.Item key="workFlow">
                    <span className={styles.navText}>- Work Flow</span>
                </Menu.Item>
                <Menu.Item key="emailTemplate">
                    <span className={styles.navText}>- Email Template</span>
                </Menu.Item>
                <Menu.Item key="dashboardNews">
                    <span className={styles.navText}>- Dashboard News</span>
                </Menu.Item>
            </SubMenu>
            <SubMenu
                key="serviceSetup"
                title={
                    <span>
                        <ServiceSetup />
                        <span className={styles.navText} >Service Setup</span>
                    </span>
                }
            >
                <Menu.Item key="serviceUser">
                    <span className={styles.navText}>- Service User</span>
                </Menu.Item>
                <Menu.Item key="clientServiceUser">
                    <span className={styles.navText}>- Client Service User</span>
                </Menu.Item>
                <Menu.Item key="supplier">
                    <span className={styles.navText}>- Supplier</span>
                </Menu.Item>
            </SubMenu>
            <SubMenu
                key="clients"
                title={
                    <span>
                        <ClientIcon />
                        <span className={styles.navText}>Clients</span>
                    </span>
                }
            >
                <Menu.Item key="registeredClients">
                    <span className={styles.navText}>- Registered Clients</span>
                </Menu.Item>
                <Menu.Item key="onboardingClients">
                    <span className={styles.navText}>- Onboarding Clients</span>
                </Menu.Item>
                <Menu.Item key="prospectClients">
                    <span className={styles.navText}>- Prospect Clients</span>
                </Menu.Item>
            </SubMenu>
            <SubMenu
                key="missingInformation"
                title={
                    <span>
                        <MissingInformationIcon />
                        <span className={styles.navText}>Missing Information</span>
                    </span>
                }
            >
                <Menu.Item key="awaitingApproval">
                    <span className={styles.navText}>- Awaiting Approval</span>
                </Menu.Item>
                <Menu.Item key="propertyView">
                    <span className={styles.navText}>- Property View</span>
                </Menu.Item>
                <Menu.Item key="clientView">
                    <span className={styles.navText}>- Client View</span>
                </Menu.Item>
            </SubMenu>
            <SubMenu
                key="Invoicing"
                title={
                    <span>
                        <InvoiceIcon />
                        <span className={styles.navText}>Invoicing</span>
                    </span>
                }
            >
                <Menu.Item key="invoicePreparation">
                    <span className={styles.navText}>- Invoice Preparation</span>
                </Menu.Item>
                <Menu.Item key="invoicing">
                    <span className={styles.navText}>- Invoicing</span>
                </Menu.Item>
                <SubMenu
                    key="creditControl"
                    title={
                        <span>
                            <span className={styles.navText}>- Credit Control</span>
                        </span>
                    }
                >
                    <Menu.Item key="statusReport">
                        <span className={styles.navText}>- Status Report</span>
                    </Menu.Item>
                    <Menu.Item key="clientReport">
                        <span className={styles.navText}>- Client Report</span>
                    </Menu.Item>
                    <Menu.Item key="invoiceTypeReport">
                        <span className={styles.navText}>- Invoice Type Report</span>
                    </Menu.Item>
                    <Menu.Item key="unsendReport">
                        <span className={styles.navText}>- Unsend Report</span>
                    </Menu.Item>
                    <Menu.Item key="unpaidReport">
                        <span className={styles.navText}>- Unpaid Report</span>
                    </Menu.Item>
                    <Menu.Item key="paidReport">
                        <span className={styles.navText}>- Paid Report</span>
                    </Menu.Item>
                </SubMenu>
            </SubMenu>
            <Menu.Item key="adHocServices">
                <AdHocServiceIcon />
                <span className={styles.navText}>Ad Hoc Services</span>
            </Menu.Item>
            <SubMenu
                key="helpDesk"
                title={
                    <span>
                        <HelpDeskIcon />
                        <span className={styles.navText} >Help Desk</span>
                    </span>
                }
            >
                <Menu.Item key="createTask">
                    <span className={styles.navText}>- Create Task</span>
                </Menu.Item>
                <Menu.Item key="myTask">
                    <span className={styles.navText}>- My Task</span>
                </Menu.Item>
                <Menu.Item key="mobileRequest">
                    <span className={styles.navText}>- Mobile Request</span>
                </Menu.Item>
                <Menu.Item key="formToClients">
                    <span className={styles.navText}>- Forms To Clients</span>
                </Menu.Item>
                <Menu.Item key="manageDiary">
                    <span className={styles.navText}>- Manage Diary</span>
                </Menu.Item>
            </SubMenu>
            <SubMenu
                key="hr"
                title={
                    <span>
                        <HrIcon />
                        <span className={styles.navText} >HR</span>
                    </span>
                }
            >
                <Menu.Item key="leave">
                    <span className={styles.navText}>- Leave</span>
                </Menu.Item>
                <Menu.Item key="permission">
                    <span className={styles.navText}>- Permission</span>
                </Menu.Item>
                <Menu.Item key="timesheet">
                    <span className={styles.navText}>- Timesheet</span>
                </Menu.Item>
                <SubMenu
                    key="reports"
                    title={
                        <span>
                            <span className={styles.navText} >- Reports</span>
                        </span>
                    }
                >
                    <Menu.Item key="reportTimesheet">
                        <span className={styles.navText}>- Timesheet</span>
                    </Menu.Item>
                    <Menu.Item key="reportLeave">
                        <span className={styles.navText}>- Leave</span>
                    </Menu.Item>
                    <Menu.Item key="reportPermission">
                        <span className={styles.navText}>- Permission</span>
                    </Menu.Item>
                </SubMenu>
            </SubMenu>
            <SubMenu
                key="userManagement"
                title={
                    <span>
                        <UserIcon />
                        <span className={styles.navText}>User Management</span>
                    </span>
                }
            >
                <Menu.Item key="manageUsers">
                    <span className={styles.navText}>- Manage Users</span>
                </Menu.Item>
                <Menu.Item key="userRights">
                    <span className={styles.navText}>- User Rights</span>
                </Menu.Item>
            </SubMenu>
            <SubMenu
                key="reports"
                title={
                    <span>
                        <ReportIcon />
                        <span className={styles.navText}>Reports</span>
                    </span>
                }
            >
                <Menu.Item key="serviceStatus">
                    <span className={styles.navText}>- Service-Status</span>
                </Menu.Item>
                <Menu.Item key="serviceClient">
                    <span className={styles.navText}>- Service-Client</span>
                </Menu.Item>
                <Menu.Item key="monthWise">
                    <span className={styles.navText}>- Month Wise</span>
                </Menu.Item>
                <Menu.Item key="missingInfo">
                    <span className={styles.navText}>- Missing Info</span>
                </Menu.Item>
                <Menu.Item key="clientStatus">
                    <span className={styles.navText}>- Client-Status</span>
                </Menu.Item>
                <Menu.Item key="onboarding">
                    <span className={styles.navText}>- Onboarding</span>
                </Menu.Item>
            </SubMenu>
            <SubMenu
                key="clientCommunication"
                title={
                    <span>
                        <ClientCommunicationIcon />
                        <span className={styles.navText}>Client Communication</span>
                    </span>
                }
            >
                <Menu.Item key="bulkMail">
                    <span className={styles.navText}>- Bulk Mail</span>
                </Menu.Item>
                <Menu.Item key="bulkSms">
                    <span className={styles.navText}>- Bulk SMS</span>
                </Menu.Item>
                <Menu.Item key="otherBusinessAssociated">
                    <span className={styles.navText}>- Other Business Associates</span>
                </Menu.Item>
            </SubMenu>
            <SubMenu
                key="wiki"
                title={
                    <span>
                        <WikiIcon />
                        <span className={styles.navText}>WIKI</span>
                    </span>
                }
            >
                <Menu.Item key="articalGroup">
                    <span className={styles.navText}>- Artical Group</span>
                </Menu.Item>
                <Menu.Item key="artical">
                    <span className={styles.navText}>- Artical</span>
                </Menu.Item>
            </SubMenu>
            <SubMenu
                key="companyHouse"
                title={
                    <span>
                        <CompanyHouseIcon />
                        <span className={styles.navText}>Company House</span>
                    </span>
                }
            >
                <Menu.Item key="companyEligibility">
                    <span className={styles.navText}>- Company Eligibility</span>
                </Menu.Item>
                <Menu.Item key="companyFormation">
                    <span className={styles.navText}>- Company Formation</span>
                </Menu.Item>
                <Menu.Item key="companyOverview">
                    <span className={styles.navText}>- Company Overview</span>
                </Menu.Item>
                <Menu.Item key="confirmationStatementFiling">
                    <span className={styles.navText}>- Confirmation Statement Filing</span>
                </Menu.Item>
                <Menu.Item key="chFilingHistory">
                    <span className={styles.navText}>- CH Filing History</span>
                </Menu.Item>
            </SubMenu>
            <SubMenu
                key="hmrc"
                title={
                    <span>
                        <HmrcIcon />
                        <span className={styles.navText}>HMRC</span>
                    </span>
                }
            >
                <Menu.Item key="hmrc648">
                    <span className={styles.navText}>- HMRC 64-8</span>
                </Menu.Item>
                <Menu.Item key="vatValidator">
                    <span className={styles.navText}>- VAT Validator</span>
                </Menu.Item>
            </SubMenu>
        </Menu>
    </Sider>
  );
}

export default SiderMenu;