---
id: v1-basecreateapplicationrequest
title: Basecreateapplicationrequest
pagination_label: Basecreateapplicationrequest
sidebar_label: Basecreateapplicationrequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Basecreateapplicationrequest', 'V1Basecreateapplicationrequest'] 
slug: /tools/sdk/go/dataaccesssecurity/models/basecreateapplicationrequest
tags: ['SDK', 'Software Development Kit', 'Basecreateapplicationrequest', 'V1Basecreateapplicationrequest']
---

# Basecreateapplicationrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApplicationType** | [**Applicationtype**](applicationtype) |  | 
**Name** | **string** | The display name of the application. | 
**Description** | Pointer to **NullableString** | A brief description of the application and its purpose. | [optional] 
**Tags** | Pointer to [**[]Int64stringkeyvaluepair**](int64stringkeyvaluepair) | A list of tags to categorize or identify the application. | [optional] 
**IdentityCollectorId** | Pointer to **NullableInt64** | The unique identifier for the identity collector associated with this application. | [optional] 
**AdIdentityCollectorId** | Pointer to **NullableInt64** | The unique identifier for the AD identity collector. | [optional] 
**NisIdentityCollectorId** | Pointer to **NullableInt64** | The unique identifier for the NIS identity collector. | [optional] 
**ApplicationCrawlerSettings** | Pointer to [**Applicationcrawlersettings**](applicationcrawlersettings) |  | [optional] 
**PermissionCollectorSettings** | Pointer to [**Permissioncollectorsettings**](permissioncollectorsettings) |  | [optional] 
**DataClassificationSettings** | Pointer to [**Dataclassificationsettings**](dataclassificationsettings) |  | [optional] 
**ActivityConfigurationSettings** | Pointer to [**Activityconfigurationsettings**](activityconfigurationsettings) |  | [optional] 
**ExecuteNow** | Pointer to **bool** | If true, the application setup will be executed immediately after creation. | [optional] [default to false]

## Methods

### NewBasecreateapplicationrequest

`func NewBasecreateapplicationrequest(applicationType Applicationtype, name string, ) *Basecreateapplicationrequest`

NewBasecreateapplicationrequest instantiates a new Basecreateapplicationrequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBasecreateapplicationrequestWithDefaults

`func NewBasecreateapplicationrequestWithDefaults() *Basecreateapplicationrequest`

NewBasecreateapplicationrequestWithDefaults instantiates a new Basecreateapplicationrequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApplicationType

`func (o *Basecreateapplicationrequest) GetApplicationType() Applicationtype`

GetApplicationType returns the ApplicationType field if non-nil, zero value otherwise.

### GetApplicationTypeOk

`func (o *Basecreateapplicationrequest) GetApplicationTypeOk() (*Applicationtype, bool)`

GetApplicationTypeOk returns a tuple with the ApplicationType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplicationType

`func (o *Basecreateapplicationrequest) SetApplicationType(v Applicationtype)`

SetApplicationType sets ApplicationType field to given value.


### GetName

`func (o *Basecreateapplicationrequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Basecreateapplicationrequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Basecreateapplicationrequest) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *Basecreateapplicationrequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Basecreateapplicationrequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Basecreateapplicationrequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Basecreateapplicationrequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *Basecreateapplicationrequest) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *Basecreateapplicationrequest) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetTags

`func (o *Basecreateapplicationrequest) GetTags() []Int64stringkeyvaluepair`

GetTags returns the Tags field if non-nil, zero value otherwise.

### GetTagsOk

`func (o *Basecreateapplicationrequest) GetTagsOk() (*[]Int64stringkeyvaluepair, bool)`

GetTagsOk returns a tuple with the Tags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTags

`func (o *Basecreateapplicationrequest) SetTags(v []Int64stringkeyvaluepair)`

SetTags sets Tags field to given value.

### HasTags

`func (o *Basecreateapplicationrequest) HasTags() bool`

HasTags returns a boolean if a field has been set.

### SetTagsNil

`func (o *Basecreateapplicationrequest) SetTagsNil(b bool)`

 SetTagsNil sets the value for Tags to be an explicit nil

### UnsetTags
`func (o *Basecreateapplicationrequest) UnsetTags()`

UnsetTags ensures that no value is present for Tags, not even an explicit nil
### GetIdentityCollectorId

`func (o *Basecreateapplicationrequest) GetIdentityCollectorId() int64`

GetIdentityCollectorId returns the IdentityCollectorId field if non-nil, zero value otherwise.

### GetIdentityCollectorIdOk

`func (o *Basecreateapplicationrequest) GetIdentityCollectorIdOk() (*int64, bool)`

GetIdentityCollectorIdOk returns a tuple with the IdentityCollectorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityCollectorId

`func (o *Basecreateapplicationrequest) SetIdentityCollectorId(v int64)`

SetIdentityCollectorId sets IdentityCollectorId field to given value.

### HasIdentityCollectorId

`func (o *Basecreateapplicationrequest) HasIdentityCollectorId() bool`

HasIdentityCollectorId returns a boolean if a field has been set.

### SetIdentityCollectorIdNil

`func (o *Basecreateapplicationrequest) SetIdentityCollectorIdNil(b bool)`

 SetIdentityCollectorIdNil sets the value for IdentityCollectorId to be an explicit nil

### UnsetIdentityCollectorId
`func (o *Basecreateapplicationrequest) UnsetIdentityCollectorId()`

UnsetIdentityCollectorId ensures that no value is present for IdentityCollectorId, not even an explicit nil
### GetAdIdentityCollectorId

`func (o *Basecreateapplicationrequest) GetAdIdentityCollectorId() int64`

GetAdIdentityCollectorId returns the AdIdentityCollectorId field if non-nil, zero value otherwise.

### GetAdIdentityCollectorIdOk

`func (o *Basecreateapplicationrequest) GetAdIdentityCollectorIdOk() (*int64, bool)`

GetAdIdentityCollectorIdOk returns a tuple with the AdIdentityCollectorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdIdentityCollectorId

`func (o *Basecreateapplicationrequest) SetAdIdentityCollectorId(v int64)`

SetAdIdentityCollectorId sets AdIdentityCollectorId field to given value.

### HasAdIdentityCollectorId

`func (o *Basecreateapplicationrequest) HasAdIdentityCollectorId() bool`

HasAdIdentityCollectorId returns a boolean if a field has been set.

### SetAdIdentityCollectorIdNil

`func (o *Basecreateapplicationrequest) SetAdIdentityCollectorIdNil(b bool)`

 SetAdIdentityCollectorIdNil sets the value for AdIdentityCollectorId to be an explicit nil

### UnsetAdIdentityCollectorId
`func (o *Basecreateapplicationrequest) UnsetAdIdentityCollectorId()`

UnsetAdIdentityCollectorId ensures that no value is present for AdIdentityCollectorId, not even an explicit nil
### GetNisIdentityCollectorId

`func (o *Basecreateapplicationrequest) GetNisIdentityCollectorId() int64`

GetNisIdentityCollectorId returns the NisIdentityCollectorId field if non-nil, zero value otherwise.

### GetNisIdentityCollectorIdOk

`func (o *Basecreateapplicationrequest) GetNisIdentityCollectorIdOk() (*int64, bool)`

GetNisIdentityCollectorIdOk returns a tuple with the NisIdentityCollectorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNisIdentityCollectorId

`func (o *Basecreateapplicationrequest) SetNisIdentityCollectorId(v int64)`

SetNisIdentityCollectorId sets NisIdentityCollectorId field to given value.

### HasNisIdentityCollectorId

`func (o *Basecreateapplicationrequest) HasNisIdentityCollectorId() bool`

HasNisIdentityCollectorId returns a boolean if a field has been set.

### SetNisIdentityCollectorIdNil

`func (o *Basecreateapplicationrequest) SetNisIdentityCollectorIdNil(b bool)`

 SetNisIdentityCollectorIdNil sets the value for NisIdentityCollectorId to be an explicit nil

### UnsetNisIdentityCollectorId
`func (o *Basecreateapplicationrequest) UnsetNisIdentityCollectorId()`

UnsetNisIdentityCollectorId ensures that no value is present for NisIdentityCollectorId, not even an explicit nil
### GetApplicationCrawlerSettings

`func (o *Basecreateapplicationrequest) GetApplicationCrawlerSettings() Applicationcrawlersettings`

GetApplicationCrawlerSettings returns the ApplicationCrawlerSettings field if non-nil, zero value otherwise.

### GetApplicationCrawlerSettingsOk

`func (o *Basecreateapplicationrequest) GetApplicationCrawlerSettingsOk() (*Applicationcrawlersettings, bool)`

GetApplicationCrawlerSettingsOk returns a tuple with the ApplicationCrawlerSettings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplicationCrawlerSettings

`func (o *Basecreateapplicationrequest) SetApplicationCrawlerSettings(v Applicationcrawlersettings)`

SetApplicationCrawlerSettings sets ApplicationCrawlerSettings field to given value.

### HasApplicationCrawlerSettings

`func (o *Basecreateapplicationrequest) HasApplicationCrawlerSettings() bool`

HasApplicationCrawlerSettings returns a boolean if a field has been set.

### GetPermissionCollectorSettings

`func (o *Basecreateapplicationrequest) GetPermissionCollectorSettings() Permissioncollectorsettings`

GetPermissionCollectorSettings returns the PermissionCollectorSettings field if non-nil, zero value otherwise.

### GetPermissionCollectorSettingsOk

`func (o *Basecreateapplicationrequest) GetPermissionCollectorSettingsOk() (*Permissioncollectorsettings, bool)`

GetPermissionCollectorSettingsOk returns a tuple with the PermissionCollectorSettings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPermissionCollectorSettings

`func (o *Basecreateapplicationrequest) SetPermissionCollectorSettings(v Permissioncollectorsettings)`

SetPermissionCollectorSettings sets PermissionCollectorSettings field to given value.

### HasPermissionCollectorSettings

`func (o *Basecreateapplicationrequest) HasPermissionCollectorSettings() bool`

HasPermissionCollectorSettings returns a boolean if a field has been set.

### GetDataClassificationSettings

`func (o *Basecreateapplicationrequest) GetDataClassificationSettings() Dataclassificationsettings`

GetDataClassificationSettings returns the DataClassificationSettings field if non-nil, zero value otherwise.

### GetDataClassificationSettingsOk

`func (o *Basecreateapplicationrequest) GetDataClassificationSettingsOk() (*Dataclassificationsettings, bool)`

GetDataClassificationSettingsOk returns a tuple with the DataClassificationSettings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataClassificationSettings

`func (o *Basecreateapplicationrequest) SetDataClassificationSettings(v Dataclassificationsettings)`

SetDataClassificationSettings sets DataClassificationSettings field to given value.

### HasDataClassificationSettings

`func (o *Basecreateapplicationrequest) HasDataClassificationSettings() bool`

HasDataClassificationSettings returns a boolean if a field has been set.

### GetActivityConfigurationSettings

`func (o *Basecreateapplicationrequest) GetActivityConfigurationSettings() Activityconfigurationsettings`

GetActivityConfigurationSettings returns the ActivityConfigurationSettings field if non-nil, zero value otherwise.

### GetActivityConfigurationSettingsOk

`func (o *Basecreateapplicationrequest) GetActivityConfigurationSettingsOk() (*Activityconfigurationsettings, bool)`

GetActivityConfigurationSettingsOk returns a tuple with the ActivityConfigurationSettings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityConfigurationSettings

`func (o *Basecreateapplicationrequest) SetActivityConfigurationSettings(v Activityconfigurationsettings)`

SetActivityConfigurationSettings sets ActivityConfigurationSettings field to given value.

### HasActivityConfigurationSettings

`func (o *Basecreateapplicationrequest) HasActivityConfigurationSettings() bool`

HasActivityConfigurationSettings returns a boolean if a field has been set.

### GetExecuteNow

`func (o *Basecreateapplicationrequest) GetExecuteNow() bool`

GetExecuteNow returns the ExecuteNow field if non-nil, zero value otherwise.

### GetExecuteNowOk

`func (o *Basecreateapplicationrequest) GetExecuteNowOk() (*bool, bool)`

GetExecuteNowOk returns a tuple with the ExecuteNow field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExecuteNow

`func (o *Basecreateapplicationrequest) SetExecuteNow(v bool)`

SetExecuteNow sets ExecuteNow field to given value.

### HasExecuteNow

`func (o *Basecreateapplicationrequest) HasExecuteNow() bool`

HasExecuteNow returns a boolean if a field has been set.


