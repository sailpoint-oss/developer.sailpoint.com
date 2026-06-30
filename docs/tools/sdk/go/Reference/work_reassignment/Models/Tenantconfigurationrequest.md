---
id: v1-tenantconfigurationrequest
title: Tenantconfigurationrequest
pagination_label: Tenantconfigurationrequest
sidebar_label: Tenantconfigurationrequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Tenantconfigurationrequest', 'V1Tenantconfigurationrequest'] 
slug: /tools/sdk/go/workreassignment/models/tenantconfigurationrequest
tags: ['SDK', 'Software Development Kit', 'Tenantconfigurationrequest', 'V1Tenantconfigurationrequest']
---

# Tenantconfigurationrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ConfigDetails** | Pointer to [**Tenantconfigurationdetails**](tenantconfigurationdetails) |  | [optional] 

## Methods

### NewTenantconfigurationrequest

`func NewTenantconfigurationrequest() *Tenantconfigurationrequest`

NewTenantconfigurationrequest instantiates a new Tenantconfigurationrequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTenantconfigurationrequestWithDefaults

`func NewTenantconfigurationrequestWithDefaults() *Tenantconfigurationrequest`

NewTenantconfigurationrequestWithDefaults instantiates a new Tenantconfigurationrequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConfigDetails

`func (o *Tenantconfigurationrequest) GetConfigDetails() Tenantconfigurationdetails`

GetConfigDetails returns the ConfigDetails field if non-nil, zero value otherwise.

### GetConfigDetailsOk

`func (o *Tenantconfigurationrequest) GetConfigDetailsOk() (*Tenantconfigurationdetails, bool)`

GetConfigDetailsOk returns a tuple with the ConfigDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfigDetails

`func (o *Tenantconfigurationrequest) SetConfigDetails(v Tenantconfigurationdetails)`

SetConfigDetails sets ConfigDetails field to given value.

### HasConfigDetails

`func (o *Tenantconfigurationrequest) HasConfigDetails() bool`

HasConfigDetails returns a boolean if a field has been set.


