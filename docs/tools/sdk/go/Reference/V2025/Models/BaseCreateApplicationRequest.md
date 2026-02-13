---
id: v2025-base-create-application-request
title: BaseCreateApplicationRequest
pagination_label: BaseCreateApplicationRequest
sidebar_label: BaseCreateApplicationRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'BaseCreateApplicationRequest', 'V2025BaseCreateApplicationRequest'] 
slug: /tools/sdk/go/v2025/models/base-create-application-request
tags: ['SDK', 'Software Development Kit', 'BaseCreateApplicationRequest', 'V2025BaseCreateApplicationRequest']
---

# BaseCreateApplicationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApplicationType** | [**ApplicationType**](application-type) |  | 
**Name** | **string** | The display name of the application. | 
**Description** | Pointer to **NullableString** | A brief description of the application and its purpose. | [optional] 
**Tags** | Pointer to [**[]Int64StringKeyValuePair**](int64-string-key-value-pair) | A list of tags to categorize or identify the application. | [optional] 
**IdentityCollectorId** | Pointer to **NullableInt64** | The unique identifier for the identity collector associated with this application. | [optional] 
**AdIdentityCollectorId** | Pointer to **NullableInt64** | The unique identifier for the AD identity collector. | [optional] 
**NisIdentityCollectorId** | Pointer to **NullableInt64** | The unique identifier for the NIS identity collector. | [optional] 
**ApplicationCrawlerSettings** | Pointer to [**ApplicationCrawlerSettings**](application-crawler-settings) |  | [optional] 
**PermissionCollectorSettings** | Pointer to [**PermissionCollectorSettings**](permission-collector-settings) |  | [optional] 
**DataClassificationSettings** | Pointer to [**DataClassificationSettings**](data-classification-settings) |  | [optional] 
**ActivityConfigurationSettings** | Pointer to [**ActivityConfigurationSettings**](activity-configuration-settings) |  | [optional] 
**ExecuteNow** | Pointer to **bool** | If true, the application setup will be executed immediately after creation. | [optional] [default to false]

## Methods

### NewBaseCreateApplicationRequest

`func NewBaseCreateApplicationRequest(applicationType ApplicationType, name string, ) *BaseCreateApplicationRequest`

NewBaseCreateApplicationRequest instantiates a new BaseCreateApplicationRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBaseCreateApplicationRequestWithDefaults

`func NewBaseCreateApplicationRequestWithDefaults() *BaseCreateApplicationRequest`

NewBaseCreateApplicationRequestWithDefaults instantiates a new BaseCreateApplicationRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApplicationType

`func (o *BaseCreateApplicationRequest) GetApplicationType() ApplicationType`

GetApplicationType returns the ApplicationType field if non-nil, zero value otherwise.

### GetApplicationTypeOk

`func (o *BaseCreateApplicationRequest) GetApplicationTypeOk() (*ApplicationType, bool)`

GetApplicationTypeOk returns a tuple with the ApplicationType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplicationType

`func (o *BaseCreateApplicationRequest) SetApplicationType(v ApplicationType)`

SetApplicationType sets ApplicationType field to given value.


### GetName

`func (o *BaseCreateApplicationRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *BaseCreateApplicationRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *BaseCreateApplicationRequest) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *BaseCreateApplicationRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *BaseCreateApplicationRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *BaseCreateApplicationRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *BaseCreateApplicationRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *BaseCreateApplicationRequest) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *BaseCreateApplicationRequest) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetTags

`func (o *BaseCreateApplicationRequest) GetTags() []Int64StringKeyValuePair`

GetTags returns the Tags field if non-nil, zero value otherwise.

### GetTagsOk

`func (o *BaseCreateApplicationRequest) GetTagsOk() (*[]Int64StringKeyValuePair, bool)`

GetTagsOk returns a tuple with the Tags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTags

`func (o *BaseCreateApplicationRequest) SetTags(v []Int64StringKeyValuePair)`

SetTags sets Tags field to given value.

### HasTags

`func (o *BaseCreateApplicationRequest) HasTags() bool`

HasTags returns a boolean if a field has been set.

### SetTagsNil

`func (o *BaseCreateApplicationRequest) SetTagsNil(b bool)`

 SetTagsNil sets the value for Tags to be an explicit nil

### UnsetTags
`func (o *BaseCreateApplicationRequest) UnsetTags()`

UnsetTags ensures that no value is present for Tags, not even an explicit nil
### GetIdentityCollectorId

`func (o *BaseCreateApplicationRequest) GetIdentityCollectorId() int64`

GetIdentityCollectorId returns the IdentityCollectorId field if non-nil, zero value otherwise.

### GetIdentityCollectorIdOk

`func (o *BaseCreateApplicationRequest) GetIdentityCollectorIdOk() (*int64, bool)`

GetIdentityCollectorIdOk returns a tuple with the IdentityCollectorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityCollectorId

`func (o *BaseCreateApplicationRequest) SetIdentityCollectorId(v int64)`

SetIdentityCollectorId sets IdentityCollectorId field to given value.

### HasIdentityCollectorId

`func (o *BaseCreateApplicationRequest) HasIdentityCollectorId() bool`

HasIdentityCollectorId returns a boolean if a field has been set.

### SetIdentityCollectorIdNil

`func (o *BaseCreateApplicationRequest) SetIdentityCollectorIdNil(b bool)`

 SetIdentityCollectorIdNil sets the value for IdentityCollectorId to be an explicit nil

### UnsetIdentityCollectorId
`func (o *BaseCreateApplicationRequest) UnsetIdentityCollectorId()`

UnsetIdentityCollectorId ensures that no value is present for IdentityCollectorId, not even an explicit nil
### GetAdIdentityCollectorId

`func (o *BaseCreateApplicationRequest) GetAdIdentityCollectorId() int64`

GetAdIdentityCollectorId returns the AdIdentityCollectorId field if non-nil, zero value otherwise.

### GetAdIdentityCollectorIdOk

`func (o *BaseCreateApplicationRequest) GetAdIdentityCollectorIdOk() (*int64, bool)`

GetAdIdentityCollectorIdOk returns a tuple with the AdIdentityCollectorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdIdentityCollectorId

`func (o *BaseCreateApplicationRequest) SetAdIdentityCollectorId(v int64)`

SetAdIdentityCollectorId sets AdIdentityCollectorId field to given value.

### HasAdIdentityCollectorId

`func (o *BaseCreateApplicationRequest) HasAdIdentityCollectorId() bool`

HasAdIdentityCollectorId returns a boolean if a field has been set.

### SetAdIdentityCollectorIdNil

`func (o *BaseCreateApplicationRequest) SetAdIdentityCollectorIdNil(b bool)`

 SetAdIdentityCollectorIdNil sets the value for AdIdentityCollectorId to be an explicit nil

### UnsetAdIdentityCollectorId
`func (o *BaseCreateApplicationRequest) UnsetAdIdentityCollectorId()`

UnsetAdIdentityCollectorId ensures that no value is present for AdIdentityCollectorId, not even an explicit nil
### GetNisIdentityCollectorId

`func (o *BaseCreateApplicationRequest) GetNisIdentityCollectorId() int64`

GetNisIdentityCollectorId returns the NisIdentityCollectorId field if non-nil, zero value otherwise.

### GetNisIdentityCollectorIdOk

`func (o *BaseCreateApplicationRequest) GetNisIdentityCollectorIdOk() (*int64, bool)`

GetNisIdentityCollectorIdOk returns a tuple with the NisIdentityCollectorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNisIdentityCollectorId

`func (o *BaseCreateApplicationRequest) SetNisIdentityCollectorId(v int64)`

SetNisIdentityCollectorId sets NisIdentityCollectorId field to given value.

### HasNisIdentityCollectorId

`func (o *BaseCreateApplicationRequest) HasNisIdentityCollectorId() bool`

HasNisIdentityCollectorId returns a boolean if a field has been set.

### SetNisIdentityCollectorIdNil

`func (o *BaseCreateApplicationRequest) SetNisIdentityCollectorIdNil(b bool)`

 SetNisIdentityCollectorIdNil sets the value for NisIdentityCollectorId to be an explicit nil

### UnsetNisIdentityCollectorId
`func (o *BaseCreateApplicationRequest) UnsetNisIdentityCollectorId()`

UnsetNisIdentityCollectorId ensures that no value is present for NisIdentityCollectorId, not even an explicit nil
### GetApplicationCrawlerSettings

`func (o *BaseCreateApplicationRequest) GetApplicationCrawlerSettings() ApplicationCrawlerSettings`

GetApplicationCrawlerSettings returns the ApplicationCrawlerSettings field if non-nil, zero value otherwise.

### GetApplicationCrawlerSettingsOk

`func (o *BaseCreateApplicationRequest) GetApplicationCrawlerSettingsOk() (*ApplicationCrawlerSettings, bool)`

GetApplicationCrawlerSettingsOk returns a tuple with the ApplicationCrawlerSettings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplicationCrawlerSettings

`func (o *BaseCreateApplicationRequest) SetApplicationCrawlerSettings(v ApplicationCrawlerSettings)`

SetApplicationCrawlerSettings sets ApplicationCrawlerSettings field to given value.

### HasApplicationCrawlerSettings

`func (o *BaseCreateApplicationRequest) HasApplicationCrawlerSettings() bool`

HasApplicationCrawlerSettings returns a boolean if a field has been set.

### GetPermissionCollectorSettings

`func (o *BaseCreateApplicationRequest) GetPermissionCollectorSettings() PermissionCollectorSettings`

GetPermissionCollectorSettings returns the PermissionCollectorSettings field if non-nil, zero value otherwise.

### GetPermissionCollectorSettingsOk

`func (o *BaseCreateApplicationRequest) GetPermissionCollectorSettingsOk() (*PermissionCollectorSettings, bool)`

GetPermissionCollectorSettingsOk returns a tuple with the PermissionCollectorSettings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPermissionCollectorSettings

`func (o *BaseCreateApplicationRequest) SetPermissionCollectorSettings(v PermissionCollectorSettings)`

SetPermissionCollectorSettings sets PermissionCollectorSettings field to given value.

### HasPermissionCollectorSettings

`func (o *BaseCreateApplicationRequest) HasPermissionCollectorSettings() bool`

HasPermissionCollectorSettings returns a boolean if a field has been set.

### GetDataClassificationSettings

`func (o *BaseCreateApplicationRequest) GetDataClassificationSettings() DataClassificationSettings`

GetDataClassificationSettings returns the DataClassificationSettings field if non-nil, zero value otherwise.

### GetDataClassificationSettingsOk

`func (o *BaseCreateApplicationRequest) GetDataClassificationSettingsOk() (*DataClassificationSettings, bool)`

GetDataClassificationSettingsOk returns a tuple with the DataClassificationSettings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataClassificationSettings

`func (o *BaseCreateApplicationRequest) SetDataClassificationSettings(v DataClassificationSettings)`

SetDataClassificationSettings sets DataClassificationSettings field to given value.

### HasDataClassificationSettings

`func (o *BaseCreateApplicationRequest) HasDataClassificationSettings() bool`

HasDataClassificationSettings returns a boolean if a field has been set.

### GetActivityConfigurationSettings

`func (o *BaseCreateApplicationRequest) GetActivityConfigurationSettings() ActivityConfigurationSettings`

GetActivityConfigurationSettings returns the ActivityConfigurationSettings field if non-nil, zero value otherwise.

### GetActivityConfigurationSettingsOk

`func (o *BaseCreateApplicationRequest) GetActivityConfigurationSettingsOk() (*ActivityConfigurationSettings, bool)`

GetActivityConfigurationSettingsOk returns a tuple with the ActivityConfigurationSettings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityConfigurationSettings

`func (o *BaseCreateApplicationRequest) SetActivityConfigurationSettings(v ActivityConfigurationSettings)`

SetActivityConfigurationSettings sets ActivityConfigurationSettings field to given value.

### HasActivityConfigurationSettings

`func (o *BaseCreateApplicationRequest) HasActivityConfigurationSettings() bool`

HasActivityConfigurationSettings returns a boolean if a field has been set.

### GetExecuteNow

`func (o *BaseCreateApplicationRequest) GetExecuteNow() bool`

GetExecuteNow returns the ExecuteNow field if non-nil, zero value otherwise.

### GetExecuteNowOk

`func (o *BaseCreateApplicationRequest) GetExecuteNowOk() (*bool, bool)`

GetExecuteNowOk returns a tuple with the ExecuteNow field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExecuteNow

`func (o *BaseCreateApplicationRequest) SetExecuteNow(v bool)`

SetExecuteNow sets ExecuteNow field to given value.

### HasExecuteNow

`func (o *BaseCreateApplicationRequest) HasExecuteNow() bool`

HasExecuteNow returns a boolean if a field has been set.


