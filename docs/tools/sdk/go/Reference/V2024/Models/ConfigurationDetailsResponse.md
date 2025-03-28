---
id: v2024-configuration-details-response
title: ConfigurationDetailsResponse
pagination_label: ConfigurationDetailsResponse
sidebar_label: ConfigurationDetailsResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ConfigurationDetailsResponse', 'V2024ConfigurationDetailsResponse'] 
slug: /tools/sdk/go/v2024/models/configuration-details-response
tags: ['SDK', 'Software Development Kit', 'ConfigurationDetailsResponse', 'V2024ConfigurationDetailsResponse']
---

# ConfigurationDetailsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ConfigType** | Pointer to [**ConfigTypeEnum**](config-type-enum) |  | [optional] 
**TargetIdentity** | Pointer to [**Identity1**](identity1) |  | [optional] 
**StartDate** | Pointer to **time.Time** | The date from which to start reassigning work items | [optional] 
**EndDate** | Pointer to **time.Time** | The date from which to stop reassigning work items.  If this is an empty string it indicates a permanent reassignment. | [optional] 
**AuditDetails** | Pointer to [**AuditDetails**](audit-details) |  | [optional] 

## Methods

### NewConfigurationDetailsResponse

`func NewConfigurationDetailsResponse() *ConfigurationDetailsResponse`

NewConfigurationDetailsResponse instantiates a new ConfigurationDetailsResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConfigurationDetailsResponseWithDefaults

`func NewConfigurationDetailsResponseWithDefaults() *ConfigurationDetailsResponse`

NewConfigurationDetailsResponseWithDefaults instantiates a new ConfigurationDetailsResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConfigType

`func (o *ConfigurationDetailsResponse) GetConfigType() ConfigTypeEnum`

GetConfigType returns the ConfigType field if non-nil, zero value otherwise.

### GetConfigTypeOk

`func (o *ConfigurationDetailsResponse) GetConfigTypeOk() (*ConfigTypeEnum, bool)`

GetConfigTypeOk returns a tuple with the ConfigType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfigType

`func (o *ConfigurationDetailsResponse) SetConfigType(v ConfigTypeEnum)`

SetConfigType sets ConfigType field to given value.

### HasConfigType

`func (o *ConfigurationDetailsResponse) HasConfigType() bool`

HasConfigType returns a boolean if a field has been set.

### GetTargetIdentity

`func (o *ConfigurationDetailsResponse) GetTargetIdentity() Identity1`

GetTargetIdentity returns the TargetIdentity field if non-nil, zero value otherwise.

### GetTargetIdentityOk

`func (o *ConfigurationDetailsResponse) GetTargetIdentityOk() (*Identity1, bool)`

GetTargetIdentityOk returns a tuple with the TargetIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetIdentity

`func (o *ConfigurationDetailsResponse) SetTargetIdentity(v Identity1)`

SetTargetIdentity sets TargetIdentity field to given value.

### HasTargetIdentity

`func (o *ConfigurationDetailsResponse) HasTargetIdentity() bool`

HasTargetIdentity returns a boolean if a field has been set.

### GetStartDate

`func (o *ConfigurationDetailsResponse) GetStartDate() time.Time`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *ConfigurationDetailsResponse) GetStartDateOk() (*time.Time, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *ConfigurationDetailsResponse) SetStartDate(v time.Time)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *ConfigurationDetailsResponse) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.

### GetEndDate

`func (o *ConfigurationDetailsResponse) GetEndDate() time.Time`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *ConfigurationDetailsResponse) GetEndDateOk() (*time.Time, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *ConfigurationDetailsResponse) SetEndDate(v time.Time)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *ConfigurationDetailsResponse) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.

### GetAuditDetails

`func (o *ConfigurationDetailsResponse) GetAuditDetails() AuditDetails`

GetAuditDetails returns the AuditDetails field if non-nil, zero value otherwise.

### GetAuditDetailsOk

`func (o *ConfigurationDetailsResponse) GetAuditDetailsOk() (*AuditDetails, bool)`

GetAuditDetailsOk returns a tuple with the AuditDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuditDetails

`func (o *ConfigurationDetailsResponse) SetAuditDetails(v AuditDetails)`

SetAuditDetails sets AuditDetails field to given value.

### HasAuditDetails

`func (o *ConfigurationDetailsResponse) HasAuditDetails() bool`

HasAuditDetails returns a boolean if a field has been set.


