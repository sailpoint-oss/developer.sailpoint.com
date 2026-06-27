---
id: v1-tenantconfigurationresponse
title: Tenantconfigurationresponse
pagination_label: Tenantconfigurationresponse
sidebar_label: Tenantconfigurationresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Tenantconfigurationresponse', 'V1Tenantconfigurationresponse'] 
slug: /tools/sdk/go/workreassignment/models/tenantconfigurationresponse
tags: ['SDK', 'Software Development Kit', 'Tenantconfigurationresponse', 'V1Tenantconfigurationresponse']
---

# Tenantconfigurationresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AuditDetails** | Pointer to [**Auditdetails**](auditdetails) |  | [optional] 
**ConfigDetails** | Pointer to [**Tenantconfigurationdetails**](tenantconfigurationdetails) |  | [optional] 

## Methods

### NewTenantconfigurationresponse

`func NewTenantconfigurationresponse() *Tenantconfigurationresponse`

NewTenantconfigurationresponse instantiates a new Tenantconfigurationresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTenantconfigurationresponseWithDefaults

`func NewTenantconfigurationresponseWithDefaults() *Tenantconfigurationresponse`

NewTenantconfigurationresponseWithDefaults instantiates a new Tenantconfigurationresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAuditDetails

`func (o *Tenantconfigurationresponse) GetAuditDetails() Auditdetails`

GetAuditDetails returns the AuditDetails field if non-nil, zero value otherwise.

### GetAuditDetailsOk

`func (o *Tenantconfigurationresponse) GetAuditDetailsOk() (*Auditdetails, bool)`

GetAuditDetailsOk returns a tuple with the AuditDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuditDetails

`func (o *Tenantconfigurationresponse) SetAuditDetails(v Auditdetails)`

SetAuditDetails sets AuditDetails field to given value.

### HasAuditDetails

`func (o *Tenantconfigurationresponse) HasAuditDetails() bool`

HasAuditDetails returns a boolean if a field has been set.

### GetConfigDetails

`func (o *Tenantconfigurationresponse) GetConfigDetails() Tenantconfigurationdetails`

GetConfigDetails returns the ConfigDetails field if non-nil, zero value otherwise.

### GetConfigDetailsOk

`func (o *Tenantconfigurationresponse) GetConfigDetailsOk() (*Tenantconfigurationdetails, bool)`

GetConfigDetailsOk returns a tuple with the ConfigDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfigDetails

`func (o *Tenantconfigurationresponse) SetConfigDetails(v Tenantconfigurationdetails)`

SetConfigDetails sets ConfigDetails field to given value.

### HasConfigDetails

`func (o *Tenantconfigurationresponse) HasConfigDetails() bool`

HasConfigDetails returns a boolean if a field has been set.


