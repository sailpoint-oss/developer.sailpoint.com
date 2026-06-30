---
id: v1-applicationitem
title: Applicationitem
pagination_label: Applicationitem
sidebar_label: Applicationitem
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Applicationitem', 'V1Applicationitem'] 
slug: /tools/sdk/go/dataaccesssecurity/models/applicationitem
tags: ['SDK', 'Software Development Kit', 'Applicationitem', 'V1Applicationitem']
---

# Applicationitem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **int64** | The unique identifier of the application. | [optional] 
**Name** | Pointer to **NullableString** | The display name of the application. | [optional] 
**Description** | Pointer to **NullableString** | A brief description of the application and its purpose. | [optional] 
**Type** | Pointer to **NullableString** | The type of the application. | [optional] 
**Tags** | Pointer to [**[]Tag**](tag) | A list of tags associated with the application. | [optional] 
**TestConnectionStatus** | Pointer to **NullableString** | The status of the last connection test performed on the application. | [optional] 
**TestConnectionDate** | Pointer to **NullableInt64** | The timestamp of the last connection test performed on the application, in milliseconds since epoch. | [optional] 
**RcClusterId** | Pointer to **NullableString** | The identifier of the cluster used for crawling resources. | [optional] 
**DcClusterId** | Pointer to **NullableString** | The identifier of the cluster used for data classification. | [optional] 
**PcClusterId** | Pointer to **NullableString** | The identifier of the cluster used for permission collection. | [optional] 

## Methods

### NewApplicationitem

`func NewApplicationitem() *Applicationitem`

NewApplicationitem instantiates a new Applicationitem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApplicationitemWithDefaults

`func NewApplicationitemWithDefaults() *Applicationitem`

NewApplicationitemWithDefaults instantiates a new Applicationitem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Applicationitem) GetId() int64`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Applicationitem) GetIdOk() (*int64, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Applicationitem) SetId(v int64)`

SetId sets Id field to given value.

### HasId

`func (o *Applicationitem) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Applicationitem) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Applicationitem) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Applicationitem) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Applicationitem) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *Applicationitem) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *Applicationitem) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetDescription

`func (o *Applicationitem) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Applicationitem) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Applicationitem) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Applicationitem) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *Applicationitem) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *Applicationitem) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetType

`func (o *Applicationitem) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Applicationitem) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Applicationitem) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Applicationitem) HasType() bool`

HasType returns a boolean if a field has been set.

### SetTypeNil

`func (o *Applicationitem) SetTypeNil(b bool)`

 SetTypeNil sets the value for Type to be an explicit nil

### UnsetType
`func (o *Applicationitem) UnsetType()`

UnsetType ensures that no value is present for Type, not even an explicit nil
### GetTags

`func (o *Applicationitem) GetTags() []Tag`

GetTags returns the Tags field if non-nil, zero value otherwise.

### GetTagsOk

`func (o *Applicationitem) GetTagsOk() (*[]Tag, bool)`

GetTagsOk returns a tuple with the Tags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTags

`func (o *Applicationitem) SetTags(v []Tag)`

SetTags sets Tags field to given value.

### HasTags

`func (o *Applicationitem) HasTags() bool`

HasTags returns a boolean if a field has been set.

### SetTagsNil

`func (o *Applicationitem) SetTagsNil(b bool)`

 SetTagsNil sets the value for Tags to be an explicit nil

### UnsetTags
`func (o *Applicationitem) UnsetTags()`

UnsetTags ensures that no value is present for Tags, not even an explicit nil
### GetTestConnectionStatus

`func (o *Applicationitem) GetTestConnectionStatus() string`

GetTestConnectionStatus returns the TestConnectionStatus field if non-nil, zero value otherwise.

### GetTestConnectionStatusOk

`func (o *Applicationitem) GetTestConnectionStatusOk() (*string, bool)`

GetTestConnectionStatusOk returns a tuple with the TestConnectionStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTestConnectionStatus

`func (o *Applicationitem) SetTestConnectionStatus(v string)`

SetTestConnectionStatus sets TestConnectionStatus field to given value.

### HasTestConnectionStatus

`func (o *Applicationitem) HasTestConnectionStatus() bool`

HasTestConnectionStatus returns a boolean if a field has been set.

### SetTestConnectionStatusNil

`func (o *Applicationitem) SetTestConnectionStatusNil(b bool)`

 SetTestConnectionStatusNil sets the value for TestConnectionStatus to be an explicit nil

### UnsetTestConnectionStatus
`func (o *Applicationitem) UnsetTestConnectionStatus()`

UnsetTestConnectionStatus ensures that no value is present for TestConnectionStatus, not even an explicit nil
### GetTestConnectionDate

`func (o *Applicationitem) GetTestConnectionDate() int64`

GetTestConnectionDate returns the TestConnectionDate field if non-nil, zero value otherwise.

### GetTestConnectionDateOk

`func (o *Applicationitem) GetTestConnectionDateOk() (*int64, bool)`

GetTestConnectionDateOk returns a tuple with the TestConnectionDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTestConnectionDate

`func (o *Applicationitem) SetTestConnectionDate(v int64)`

SetTestConnectionDate sets TestConnectionDate field to given value.

### HasTestConnectionDate

`func (o *Applicationitem) HasTestConnectionDate() bool`

HasTestConnectionDate returns a boolean if a field has been set.

### SetTestConnectionDateNil

`func (o *Applicationitem) SetTestConnectionDateNil(b bool)`

 SetTestConnectionDateNil sets the value for TestConnectionDate to be an explicit nil

### UnsetTestConnectionDate
`func (o *Applicationitem) UnsetTestConnectionDate()`

UnsetTestConnectionDate ensures that no value is present for TestConnectionDate, not even an explicit nil
### GetRcClusterId

`func (o *Applicationitem) GetRcClusterId() string`

GetRcClusterId returns the RcClusterId field if non-nil, zero value otherwise.

### GetRcClusterIdOk

`func (o *Applicationitem) GetRcClusterIdOk() (*string, bool)`

GetRcClusterIdOk returns a tuple with the RcClusterId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRcClusterId

`func (o *Applicationitem) SetRcClusterId(v string)`

SetRcClusterId sets RcClusterId field to given value.

### HasRcClusterId

`func (o *Applicationitem) HasRcClusterId() bool`

HasRcClusterId returns a boolean if a field has been set.

### SetRcClusterIdNil

`func (o *Applicationitem) SetRcClusterIdNil(b bool)`

 SetRcClusterIdNil sets the value for RcClusterId to be an explicit nil

### UnsetRcClusterId
`func (o *Applicationitem) UnsetRcClusterId()`

UnsetRcClusterId ensures that no value is present for RcClusterId, not even an explicit nil
### GetDcClusterId

`func (o *Applicationitem) GetDcClusterId() string`

GetDcClusterId returns the DcClusterId field if non-nil, zero value otherwise.

### GetDcClusterIdOk

`func (o *Applicationitem) GetDcClusterIdOk() (*string, bool)`

GetDcClusterIdOk returns a tuple with the DcClusterId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDcClusterId

`func (o *Applicationitem) SetDcClusterId(v string)`

SetDcClusterId sets DcClusterId field to given value.

### HasDcClusterId

`func (o *Applicationitem) HasDcClusterId() bool`

HasDcClusterId returns a boolean if a field has been set.

### SetDcClusterIdNil

`func (o *Applicationitem) SetDcClusterIdNil(b bool)`

 SetDcClusterIdNil sets the value for DcClusterId to be an explicit nil

### UnsetDcClusterId
`func (o *Applicationitem) UnsetDcClusterId()`

UnsetDcClusterId ensures that no value is present for DcClusterId, not even an explicit nil
### GetPcClusterId

`func (o *Applicationitem) GetPcClusterId() string`

GetPcClusterId returns the PcClusterId field if non-nil, zero value otherwise.

### GetPcClusterIdOk

`func (o *Applicationitem) GetPcClusterIdOk() (*string, bool)`

GetPcClusterIdOk returns a tuple with the PcClusterId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPcClusterId

`func (o *Applicationitem) SetPcClusterId(v string)`

SetPcClusterId sets PcClusterId field to given value.

### HasPcClusterId

`func (o *Applicationitem) HasPcClusterId() bool`

HasPcClusterId returns a boolean if a field has been set.

### SetPcClusterIdNil

`func (o *Applicationitem) SetPcClusterIdNil(b bool)`

 SetPcClusterIdNil sets the value for PcClusterId to be an explicit nil

### UnsetPcClusterId
`func (o *Applicationitem) UnsetPcClusterId()`

UnsetPcClusterId ensures that no value is present for PcClusterId, not even an explicit nil

