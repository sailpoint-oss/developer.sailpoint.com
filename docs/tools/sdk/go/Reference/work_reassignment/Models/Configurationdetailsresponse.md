---
id: v1-configurationdetailsresponse
title: Configurationdetailsresponse
pagination_label: Configurationdetailsresponse
sidebar_label: Configurationdetailsresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Configurationdetailsresponse', 'V1Configurationdetailsresponse'] 
slug: /tools/sdk/go/workreassignment/models/configurationdetailsresponse
tags: ['SDK', 'Software Development Kit', 'Configurationdetailsresponse', 'V1Configurationdetailsresponse']
---

# Configurationdetailsresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ConfigType** | Pointer to [**Configtypeenum**](configtypeenum) |  | [optional] 
**TargetIdentity** | Pointer to [**Identity2**](identity2) |  | [optional] 
**StartDate** | Pointer to **SailPointTime** | The date from which to start reassigning work items | [optional] 
**EndDate** | Pointer to **SailPointTime** | The date from which to stop reassigning work items.  If this is an empty string it indicates a permanent reassignment. | [optional] 
**AuditDetails** | Pointer to [**Auditdetails**](auditdetails) |  | [optional] 

## Methods

### NewConfigurationdetailsresponse

`func NewConfigurationdetailsresponse() *Configurationdetailsresponse`

NewConfigurationdetailsresponse instantiates a new Configurationdetailsresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConfigurationdetailsresponseWithDefaults

`func NewConfigurationdetailsresponseWithDefaults() *Configurationdetailsresponse`

NewConfigurationdetailsresponseWithDefaults instantiates a new Configurationdetailsresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConfigType

`func (o *Configurationdetailsresponse) GetConfigType() Configtypeenum`

GetConfigType returns the ConfigType field if non-nil, zero value otherwise.

### GetConfigTypeOk

`func (o *Configurationdetailsresponse) GetConfigTypeOk() (*Configtypeenum, bool)`

GetConfigTypeOk returns a tuple with the ConfigType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfigType

`func (o *Configurationdetailsresponse) SetConfigType(v Configtypeenum)`

SetConfigType sets ConfigType field to given value.

### HasConfigType

`func (o *Configurationdetailsresponse) HasConfigType() bool`

HasConfigType returns a boolean if a field has been set.

### GetTargetIdentity

`func (o *Configurationdetailsresponse) GetTargetIdentity() Identity2`

GetTargetIdentity returns the TargetIdentity field if non-nil, zero value otherwise.

### GetTargetIdentityOk

`func (o *Configurationdetailsresponse) GetTargetIdentityOk() (*Identity2, bool)`

GetTargetIdentityOk returns a tuple with the TargetIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetIdentity

`func (o *Configurationdetailsresponse) SetTargetIdentity(v Identity2)`

SetTargetIdentity sets TargetIdentity field to given value.

### HasTargetIdentity

`func (o *Configurationdetailsresponse) HasTargetIdentity() bool`

HasTargetIdentity returns a boolean if a field has been set.

### GetStartDate

`func (o *Configurationdetailsresponse) GetStartDate() SailPointTime`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *Configurationdetailsresponse) GetStartDateOk() (*SailPointTime, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *Configurationdetailsresponse) SetStartDate(v SailPointTime)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *Configurationdetailsresponse) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.

### GetEndDate

`func (o *Configurationdetailsresponse) GetEndDate() SailPointTime`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *Configurationdetailsresponse) GetEndDateOk() (*SailPointTime, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *Configurationdetailsresponse) SetEndDate(v SailPointTime)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *Configurationdetailsresponse) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.

### GetAuditDetails

`func (o *Configurationdetailsresponse) GetAuditDetails() Auditdetails`

GetAuditDetails returns the AuditDetails field if non-nil, zero value otherwise.

### GetAuditDetailsOk

`func (o *Configurationdetailsresponse) GetAuditDetailsOk() (*Auditdetails, bool)`

GetAuditDetailsOk returns a tuple with the AuditDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuditDetails

`func (o *Configurationdetailsresponse) SetAuditDetails(v Auditdetails)`

SetAuditDetails sets AuditDetails field to given value.

### HasAuditDetails

`func (o *Configurationdetailsresponse) HasAuditDetails() bool`

HasAuditDetails returns a boolean if a field has been set.


