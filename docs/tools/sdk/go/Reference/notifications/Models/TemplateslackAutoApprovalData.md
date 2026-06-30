---
id: v1-templateslack-auto-approval-data
title: TemplateslackAutoApprovalData
pagination_label: TemplateslackAutoApprovalData
sidebar_label: TemplateslackAutoApprovalData
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'TemplateslackAutoApprovalData', 'V1TemplateslackAutoApprovalData'] 
slug: /tools/sdk/go/notifications/models/templateslack-auto-approval-data
tags: ['SDK', 'Software Development Kit', 'TemplateslackAutoApprovalData', 'V1TemplateslackAutoApprovalData']
---

# TemplateslackAutoApprovalData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IsAutoApproved** | Pointer to **NullableString** | Whether the request was auto-approved | [optional] 
**ItemId** | Pointer to **NullableString** | The item ID | [optional] 
**ItemType** | Pointer to **NullableString** | The item type | [optional] 
**AutoApprovalMessageJSON** | Pointer to **NullableString** | JSON message for auto-approval | [optional] 
**AutoApprovalTitle** | Pointer to **NullableString** | Title for auto-approval | [optional] 

## Methods

### NewTemplateslackAutoApprovalData

`func NewTemplateslackAutoApprovalData() *TemplateslackAutoApprovalData`

NewTemplateslackAutoApprovalData instantiates a new TemplateslackAutoApprovalData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateslackAutoApprovalDataWithDefaults

`func NewTemplateslackAutoApprovalDataWithDefaults() *TemplateslackAutoApprovalData`

NewTemplateslackAutoApprovalDataWithDefaults instantiates a new TemplateslackAutoApprovalData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIsAutoApproved

`func (o *TemplateslackAutoApprovalData) GetIsAutoApproved() string`

GetIsAutoApproved returns the IsAutoApproved field if non-nil, zero value otherwise.

### GetIsAutoApprovedOk

`func (o *TemplateslackAutoApprovalData) GetIsAutoApprovedOk() (*string, bool)`

GetIsAutoApprovedOk returns a tuple with the IsAutoApproved field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsAutoApproved

`func (o *TemplateslackAutoApprovalData) SetIsAutoApproved(v string)`

SetIsAutoApproved sets IsAutoApproved field to given value.

### HasIsAutoApproved

`func (o *TemplateslackAutoApprovalData) HasIsAutoApproved() bool`

HasIsAutoApproved returns a boolean if a field has been set.

### SetIsAutoApprovedNil

`func (o *TemplateslackAutoApprovalData) SetIsAutoApprovedNil(b bool)`

 SetIsAutoApprovedNil sets the value for IsAutoApproved to be an explicit nil

### UnsetIsAutoApproved
`func (o *TemplateslackAutoApprovalData) UnsetIsAutoApproved()`

UnsetIsAutoApproved ensures that no value is present for IsAutoApproved, not even an explicit nil
### GetItemId

`func (o *TemplateslackAutoApprovalData) GetItemId() string`

GetItemId returns the ItemId field if non-nil, zero value otherwise.

### GetItemIdOk

`func (o *TemplateslackAutoApprovalData) GetItemIdOk() (*string, bool)`

GetItemIdOk returns a tuple with the ItemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemId

`func (o *TemplateslackAutoApprovalData) SetItemId(v string)`

SetItemId sets ItemId field to given value.

### HasItemId

`func (o *TemplateslackAutoApprovalData) HasItemId() bool`

HasItemId returns a boolean if a field has been set.

### SetItemIdNil

`func (o *TemplateslackAutoApprovalData) SetItemIdNil(b bool)`

 SetItemIdNil sets the value for ItemId to be an explicit nil

### UnsetItemId
`func (o *TemplateslackAutoApprovalData) UnsetItemId()`

UnsetItemId ensures that no value is present for ItemId, not even an explicit nil
### GetItemType

`func (o *TemplateslackAutoApprovalData) GetItemType() string`

GetItemType returns the ItemType field if non-nil, zero value otherwise.

### GetItemTypeOk

`func (o *TemplateslackAutoApprovalData) GetItemTypeOk() (*string, bool)`

GetItemTypeOk returns a tuple with the ItemType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemType

`func (o *TemplateslackAutoApprovalData) SetItemType(v string)`

SetItemType sets ItemType field to given value.

### HasItemType

`func (o *TemplateslackAutoApprovalData) HasItemType() bool`

HasItemType returns a boolean if a field has been set.

### SetItemTypeNil

`func (o *TemplateslackAutoApprovalData) SetItemTypeNil(b bool)`

 SetItemTypeNil sets the value for ItemType to be an explicit nil

### UnsetItemType
`func (o *TemplateslackAutoApprovalData) UnsetItemType()`

UnsetItemType ensures that no value is present for ItemType, not even an explicit nil
### GetAutoApprovalMessageJSON

`func (o *TemplateslackAutoApprovalData) GetAutoApprovalMessageJSON() string`

GetAutoApprovalMessageJSON returns the AutoApprovalMessageJSON field if non-nil, zero value otherwise.

### GetAutoApprovalMessageJSONOk

`func (o *TemplateslackAutoApprovalData) GetAutoApprovalMessageJSONOk() (*string, bool)`

GetAutoApprovalMessageJSONOk returns a tuple with the AutoApprovalMessageJSON field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoApprovalMessageJSON

`func (o *TemplateslackAutoApprovalData) SetAutoApprovalMessageJSON(v string)`

SetAutoApprovalMessageJSON sets AutoApprovalMessageJSON field to given value.

### HasAutoApprovalMessageJSON

`func (o *TemplateslackAutoApprovalData) HasAutoApprovalMessageJSON() bool`

HasAutoApprovalMessageJSON returns a boolean if a field has been set.

### SetAutoApprovalMessageJSONNil

`func (o *TemplateslackAutoApprovalData) SetAutoApprovalMessageJSONNil(b bool)`

 SetAutoApprovalMessageJSONNil sets the value for AutoApprovalMessageJSON to be an explicit nil

### UnsetAutoApprovalMessageJSON
`func (o *TemplateslackAutoApprovalData) UnsetAutoApprovalMessageJSON()`

UnsetAutoApprovalMessageJSON ensures that no value is present for AutoApprovalMessageJSON, not even an explicit nil
### GetAutoApprovalTitle

`func (o *TemplateslackAutoApprovalData) GetAutoApprovalTitle() string`

GetAutoApprovalTitle returns the AutoApprovalTitle field if non-nil, zero value otherwise.

### GetAutoApprovalTitleOk

`func (o *TemplateslackAutoApprovalData) GetAutoApprovalTitleOk() (*string, bool)`

GetAutoApprovalTitleOk returns a tuple with the AutoApprovalTitle field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoApprovalTitle

`func (o *TemplateslackAutoApprovalData) SetAutoApprovalTitle(v string)`

SetAutoApprovalTitle sets AutoApprovalTitle field to given value.

### HasAutoApprovalTitle

`func (o *TemplateslackAutoApprovalData) HasAutoApprovalTitle() bool`

HasAutoApprovalTitle returns a boolean if a field has been set.

### SetAutoApprovalTitleNil

`func (o *TemplateslackAutoApprovalData) SetAutoApprovalTitleNil(b bool)`

 SetAutoApprovalTitleNil sets the value for AutoApprovalTitle to be an explicit nil

### UnsetAutoApprovalTitle
`func (o *TemplateslackAutoApprovalData) UnsetAutoApprovalTitle()`

UnsetAutoApprovalTitle ensures that no value is present for AutoApprovalTitle, not even an explicit nil

