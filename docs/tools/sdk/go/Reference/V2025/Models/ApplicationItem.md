---
id: v2025-application-item
title: ApplicationItem
pagination_label: ApplicationItem
sidebar_label: ApplicationItem
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ApplicationItem', 'V2025ApplicationItem'] 
slug: /tools/sdk/go/v2025/models/application-item
tags: ['SDK', 'Software Development Kit', 'ApplicationItem', 'V2025ApplicationItem']
---

# ApplicationItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **int64** | The unique identifier of the application. | [optional] 
**Name** | Pointer to **NullableString** | The display name of the application. | [optional] 
**Description** | Pointer to **NullableString** | A brief description of the application and its purpose. | [optional] 
**Type** | Pointer to **NullableString** | The type of the application. | [optional] 
**Tags** | Pointer to [**[]Tag1**](tag1) | A list of tags associated with the application. | [optional] 
**TestConnectionStatus** | Pointer to **NullableString** | The status of the last connection test performed on the application. | [optional] 
**TestConnectionDate** | Pointer to **NullableInt64** | The timestamp of the last connection test performed on the application, in milliseconds since epoch. | [optional] 
**RcClusterId** | Pointer to **NullableString** | The identifier of the cluster used for crawling resources. | [optional] 
**DcClusterId** | Pointer to **NullableString** | The identifier of the cluster used for data classification. | [optional] 
**PcClusterId** | Pointer to **NullableString** | The identifier of the cluster used for permission collection. | [optional] 

## Methods

### NewApplicationItem

`func NewApplicationItem() *ApplicationItem`

NewApplicationItem instantiates a new ApplicationItem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApplicationItemWithDefaults

`func NewApplicationItemWithDefaults() *ApplicationItem`

NewApplicationItemWithDefaults instantiates a new ApplicationItem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ApplicationItem) GetId() int64`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ApplicationItem) GetIdOk() (*int64, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ApplicationItem) SetId(v int64)`

SetId sets Id field to given value.

### HasId

`func (o *ApplicationItem) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *ApplicationItem) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ApplicationItem) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ApplicationItem) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ApplicationItem) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *ApplicationItem) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *ApplicationItem) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetDescription

`func (o *ApplicationItem) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ApplicationItem) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ApplicationItem) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ApplicationItem) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *ApplicationItem) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *ApplicationItem) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetType

`func (o *ApplicationItem) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ApplicationItem) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ApplicationItem) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *ApplicationItem) HasType() bool`

HasType returns a boolean if a field has been set.

### SetTypeNil

`func (o *ApplicationItem) SetTypeNil(b bool)`

 SetTypeNil sets the value for Type to be an explicit nil

### UnsetType
`func (o *ApplicationItem) UnsetType()`

UnsetType ensures that no value is present for Type, not even an explicit nil
### GetTags

`func (o *ApplicationItem) GetTags() []Tag1`

GetTags returns the Tags field if non-nil, zero value otherwise.

### GetTagsOk

`func (o *ApplicationItem) GetTagsOk() (*[]Tag1, bool)`

GetTagsOk returns a tuple with the Tags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTags

`func (o *ApplicationItem) SetTags(v []Tag1)`

SetTags sets Tags field to given value.

### HasTags

`func (o *ApplicationItem) HasTags() bool`

HasTags returns a boolean if a field has been set.

### SetTagsNil

`func (o *ApplicationItem) SetTagsNil(b bool)`

 SetTagsNil sets the value for Tags to be an explicit nil

### UnsetTags
`func (o *ApplicationItem) UnsetTags()`

UnsetTags ensures that no value is present for Tags, not even an explicit nil
### GetTestConnectionStatus

`func (o *ApplicationItem) GetTestConnectionStatus() string`

GetTestConnectionStatus returns the TestConnectionStatus field if non-nil, zero value otherwise.

### GetTestConnectionStatusOk

`func (o *ApplicationItem) GetTestConnectionStatusOk() (*string, bool)`

GetTestConnectionStatusOk returns a tuple with the TestConnectionStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTestConnectionStatus

`func (o *ApplicationItem) SetTestConnectionStatus(v string)`

SetTestConnectionStatus sets TestConnectionStatus field to given value.

### HasTestConnectionStatus

`func (o *ApplicationItem) HasTestConnectionStatus() bool`

HasTestConnectionStatus returns a boolean if a field has been set.

### SetTestConnectionStatusNil

`func (o *ApplicationItem) SetTestConnectionStatusNil(b bool)`

 SetTestConnectionStatusNil sets the value for TestConnectionStatus to be an explicit nil

### UnsetTestConnectionStatus
`func (o *ApplicationItem) UnsetTestConnectionStatus()`

UnsetTestConnectionStatus ensures that no value is present for TestConnectionStatus, not even an explicit nil
### GetTestConnectionDate

`func (o *ApplicationItem) GetTestConnectionDate() int64`

GetTestConnectionDate returns the TestConnectionDate field if non-nil, zero value otherwise.

### GetTestConnectionDateOk

`func (o *ApplicationItem) GetTestConnectionDateOk() (*int64, bool)`

GetTestConnectionDateOk returns a tuple with the TestConnectionDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTestConnectionDate

`func (o *ApplicationItem) SetTestConnectionDate(v int64)`

SetTestConnectionDate sets TestConnectionDate field to given value.

### HasTestConnectionDate

`func (o *ApplicationItem) HasTestConnectionDate() bool`

HasTestConnectionDate returns a boolean if a field has been set.

### SetTestConnectionDateNil

`func (o *ApplicationItem) SetTestConnectionDateNil(b bool)`

 SetTestConnectionDateNil sets the value for TestConnectionDate to be an explicit nil

### UnsetTestConnectionDate
`func (o *ApplicationItem) UnsetTestConnectionDate()`

UnsetTestConnectionDate ensures that no value is present for TestConnectionDate, not even an explicit nil
### GetRcClusterId

`func (o *ApplicationItem) GetRcClusterId() string`

GetRcClusterId returns the RcClusterId field if non-nil, zero value otherwise.

### GetRcClusterIdOk

`func (o *ApplicationItem) GetRcClusterIdOk() (*string, bool)`

GetRcClusterIdOk returns a tuple with the RcClusterId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRcClusterId

`func (o *ApplicationItem) SetRcClusterId(v string)`

SetRcClusterId sets RcClusterId field to given value.

### HasRcClusterId

`func (o *ApplicationItem) HasRcClusterId() bool`

HasRcClusterId returns a boolean if a field has been set.

### SetRcClusterIdNil

`func (o *ApplicationItem) SetRcClusterIdNil(b bool)`

 SetRcClusterIdNil sets the value for RcClusterId to be an explicit nil

### UnsetRcClusterId
`func (o *ApplicationItem) UnsetRcClusterId()`

UnsetRcClusterId ensures that no value is present for RcClusterId, not even an explicit nil
### GetDcClusterId

`func (o *ApplicationItem) GetDcClusterId() string`

GetDcClusterId returns the DcClusterId field if non-nil, zero value otherwise.

### GetDcClusterIdOk

`func (o *ApplicationItem) GetDcClusterIdOk() (*string, bool)`

GetDcClusterIdOk returns a tuple with the DcClusterId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDcClusterId

`func (o *ApplicationItem) SetDcClusterId(v string)`

SetDcClusterId sets DcClusterId field to given value.

### HasDcClusterId

`func (o *ApplicationItem) HasDcClusterId() bool`

HasDcClusterId returns a boolean if a field has been set.

### SetDcClusterIdNil

`func (o *ApplicationItem) SetDcClusterIdNil(b bool)`

 SetDcClusterIdNil sets the value for DcClusterId to be an explicit nil

### UnsetDcClusterId
`func (o *ApplicationItem) UnsetDcClusterId()`

UnsetDcClusterId ensures that no value is present for DcClusterId, not even an explicit nil
### GetPcClusterId

`func (o *ApplicationItem) GetPcClusterId() string`

GetPcClusterId returns the PcClusterId field if non-nil, zero value otherwise.

### GetPcClusterIdOk

`func (o *ApplicationItem) GetPcClusterIdOk() (*string, bool)`

GetPcClusterIdOk returns a tuple with the PcClusterId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPcClusterId

`func (o *ApplicationItem) SetPcClusterId(v string)`

SetPcClusterId sets PcClusterId field to given value.

### HasPcClusterId

`func (o *ApplicationItem) HasPcClusterId() bool`

HasPcClusterId returns a boolean if a field has been set.

### SetPcClusterIdNil

`func (o *ApplicationItem) SetPcClusterIdNil(b bool)`

 SetPcClusterIdNil sets the value for PcClusterId to be an explicit nil

### UnsetPcClusterId
`func (o *ApplicationItem) UnsetPcClusterId()`

UnsetPcClusterId ensures that no value is present for PcClusterId, not even an explicit nil

