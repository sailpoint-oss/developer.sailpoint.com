---
id: secure-data-share
title: Secure Data Share
pagination_label: Secure Data Share
sidebar_label: Secure Data Share
sidebar_position: 4
sidebar_class_name: secureDataShare
keywords: ['data', 'data share']
description: Secure Data Share is an easy way to get data about IDN
slug: /docs/secure-data-share
tags: ['SecureDataShare']
---

SaaS Connectivity is a cloud based connector runtime that makes developing and deploying web service connectors easier than Connector 1.0 does. However, because the cloud hosts SaaS Connectivity, not a Virtual Appliance (VA), SaaS Connectivity is limited in the types of applications it can connect to. For example, you cannot use SaaS Connectivity to connect to on-prem services that can only communicate within an intranet (no public internet access). This excludes JDBC and Mainframe applications, to name a few.

```mermaid
erDiagram
    CAR ||--o{ NAMED-DRIVER : allows
    CAR {
        string registrationNumber PK
        string make
        string model
        string[] parts
    }
    PERSON ||--o{ NAMED-DRIVER : is
    PERSON {
        string driversLicense PK "The license #"
        string firstName "Only 99 characters are allowed"
        string lastName
        string phone PK
        int age
    }
    NAMED-DRIVER {
        string carRegistrationNumber PK
        string driverLicence PK
    }
    MANUFACTURER ||--o{ CAR : makes
```