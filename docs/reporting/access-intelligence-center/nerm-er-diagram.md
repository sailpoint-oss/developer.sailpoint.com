---
id: aic-nerm-er-diagram
title: Access Intelligence Center NERM ER Diagram
pagination_label: Access Intelligence Center NERM ER Diagram
sidebar_label: NERM Entity Relationship Diagram
sidebar_position: 6
sidebar_class_name: AccessIntelligenceCenter
keywords: ['data listing', 'data share', 'secure data sharing']
description: Access Intelligence Center NERM ER Diagram
slug: /reporting/aic-nerm-er-diagram
tags: ['AccessIntelligenceCenter', 'AIC', 'NERM']
hide_table_of_contents: true
---

import MermaidViewer from '@site/src/components/MermaidViewer';

# Access Intelligence Center NERM ER Diagram

<!-- Identity Attributes are to be worked on later because there are no current default values -->

<MermaidViewer diagram='erDiagram
    ASSIGNMENT {
        varchar ASSIGNMENT_PK PK "This is the primary key for the assignment table"
        varchar ASSIGNMENT_ID "This is the assignment id"
        timestamp ASSIGNMENT_CREATED_DATE "This is the assignment created date"
        timestamp ASSIGNMENT_HARD_DELETED "This shows if the assignment was hard deleted or not"
        timestamp ASSIGNMENT_UPDATED_DATE "This is the assignment updated date"
        varchar ASSIGNMENT_NAME "This is the name of the assignment"
        varchar ASSIGNMENT_JOB_CODE "This is the job code for the assignment"
        varchar ASSIGNMENT_COST_CENTER "This is the cost center for the assignment"
        varchar ASSIGNMENT_LOCATION "This is the location of the assignment"
        varchar ASSIGNMENT_DEPARTMENT "This is the department of the assignment"
        varchar ASSIGNMENT_DESCRIPTION "This is a short description for the assignment"
        varchar ASSIGNMENT_SPONSOR "This is the assignment sponsor"
        timestamp ASSIGNMENT_START_DATE "This is the assignment start date"
        timestamp ASSIGNMENT_END_DATE "This is the assignment end date"
        timestamp ASSIGNMENT_SYNC_DATE "This is the assignment sync date"
        varchar DAYS_TO_EXPIRE "This is the number of days till the assignment expires"
    }
    NON_EMPLOYEE {
        varchar NON_EMPLOYEE_PK PK "This is the primary key for the non-employee table"
        varchar ASSIGNMENT_ID "This is the non-employee assignment id"
        boolean HARD_DELETED "This shows if the non-employee was hard deleted or not"
        varchar FIRST_NAME "This is the first name of the non-employee"
        varchar MIDDLE_NAME "This is the middle name of the non-employee"
        varchar LAST_NAME "This is the last name of the non-employee"
        varchar COMPANY_ID "This is the company id of the non-employee"
        varchar BUSINESS_EMAIL "This is the business email of the non-employee"
        varchar BUSINESS_PHONE_NUMBER "This is the business phone number of the non-employee"
        varchar TIME_ZONE "This is the time-zone of the non-employee"
        boolean ELIGIBLE_FOR_REHIRE "This shows if the non-employee is eligible for rehire or not"
        varchar STATUS "This is the status of the non-employee"
        varchar CREATED_DATE "This is the non-employee created date"
        varchar UPDATED_DATE "This is the non-employee updated date"
        varchar SYNC_DATE "This is the non-employee sync date"
        varchar FULL_NAME "This is the non-employee full name"
    }
    ASSIGNMENT ||--o{ NON_EMPLOYEE : "associated to"'></MermaidViewer>