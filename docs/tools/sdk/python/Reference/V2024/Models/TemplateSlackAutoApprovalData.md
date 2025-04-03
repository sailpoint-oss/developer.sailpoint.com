---
id: v2024-template-slack-auto-approval-data
title: TemplateSlackAutoApprovalData
pagination_label: TemplateSlackAutoApprovalData
sidebar_label: TemplateSlackAutoApprovalData
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'TemplateSlackAutoApprovalData', 'V2024TemplateSlackAutoApprovalData'] 
slug: /tools/sdk/go/v2024/models/template-slack-auto-approval-data
tags: ['SDK', 'Software Development Kit', 'TemplateSlackAutoApprovalData', 'V2024TemplateSlackAutoApprovalData']
---

# TemplateSlackAutoApprovalData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IsAutoApproved** | Pointer to **NullableString** |  | [optional] 
**ItemId** | Pointer to **NullableString** |  | [optional] 
**ItemType** | Pointer to **NullableString** |  | [optional] 
**AutoApprovalMessageJSON** | Pointer to **NullableString** |  | [optional] 
**AutoApprovalTitle** | Pointer to **NullableString** |  | [optional] 

## Methods

### NewTemplateSlackAutoApprovalData

`func NewTemplateSlackAutoApprovalData() *TemplateSlackAutoApprovalData`

NewTemplateSlackAutoApprovalData instantiates a new TemplateSlackAutoApprovalData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateSlackAutoApprovalDataWithDefaults

`func NewTemplateSlackAutoApprovalDataWithDefaults() *TemplateSlackAutoApprovalData`

NewTemplateSlackAutoApprovalDataWithDefaults instantiates a new TemplateSlackAutoApprovalData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIsAutoApproved

`func (o *TemplateSlackAutoApprovalData) GetIsAutoApproved() string`

GetIsAutoApproved returns the IsAutoApproved field if non-nil, zero value otherwise.

### GetIsAutoApprovedOk

`func (o *TemplateSlackAutoApprovalData) GetIsAutoApprovedOk() (*string, bool)`

GetIsAutoApprovedOk returns a tuple with the IsAutoApproved field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsAutoApproved

`func (o *TemplateSlackAutoApprovalData) SetIsAutoApproved(v string)`

SetIsAutoApproved sets IsAutoApproved field to given value.

### HasIsAutoApproved

`func (o *TemplateSlackAutoApprovalData) HasIsAutoApproved() bool`

HasIsAutoApproved returns a boolean if a field has been set.

### SetIsAutoApprovedNil

`func (o *TemplateSlackAutoApprovalData) SetIsAutoApprovedNil(b bool)`

 SetIsAutoApprovedNil sets the value for IsAutoApproved to be an explicit nil

### UnsetIsAutoApproved
`func (o *TemplateSlackAutoApprovalData) UnsetIsAutoApproved()`

UnsetIsAutoApproved ensures that no value is present for IsAutoApproved, not even an explicit nil
### GetItemId

`func (o *TemplateSlackAutoApprovalData) GetItemId() string`

GetItemId returns the ItemId field if non-nil, zero value otherwise.

### GetItemIdOk

`func (o *TemplateSlackAutoApprovalData) GetItemIdOk() (*string, bool)`

GetItemIdOk returns a tuple with the ItemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemId

`func (o *TemplateSlackAutoApprovalData) SetItemId(v string)`

SetItemId sets ItemId field to given value.

### HasItemId

`func (o *TemplateSlackAutoApprovalData) HasItemId() bool`

HasItemId returns a boolean if a field has been set.

### SetItemIdNil

`func (o *TemplateSlackAutoApprovalData) SetItemIdNil(b bool)`

 SetItemIdNil sets the value for ItemId to be an explicit nil

### UnsetItemId
`func (o *TemplateSlackAutoApprovalData) UnsetItemId()`

UnsetItemId ensures that no value is present for ItemId, not even an explicit nil
### GetItemType

`func (o *TemplateSlackAutoApprovalData) GetItemType() string`

GetItemType returns the ItemType field if non-nil, zero value otherwise.

### GetItemTypeOk

`func (o *TemplateSlackAutoApprovalData) GetItemTypeOk() (*string, bool)`

GetItemTypeOk returns a tuple with the ItemType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemType

`func (o *TemplateSlackAutoApprovalData) SetItemType(v string)`

SetItemType sets ItemType field to given value.

### HasItemType

`func (o *TemplateSlackAutoApprovalData) HasItemType() bool`

HasItemType returns a boolean if a field has been set.

### SetItemTypeNil

`func (o *TemplateSlackAutoApprovalData) SetItemTypeNil(b bool)`

 SetItemTypeNil sets the value for ItemType to be an explicit nil

### UnsetItemType
`func (o *TemplateSlackAutoApprovalData) UnsetItemType()`

UnsetItemType ensures that no value is present for ItemType, not even an explicit nil
### GetAutoApprovalMessageJSON

`func (o *TemplateSlackAutoApprovalData) GetAutoApprovalMessageJSON() string`

GetAutoApprovalMessageJSON returns the AutoApprovalMessageJSON field if non-nil, zero value otherwise.

### GetAutoApprovalMessageJSONOk

`func (o *TemplateSlackAutoApprovalData) GetAutoApprovalMessageJSONOk() (*string, bool)`

GetAutoApprovalMessageJSONOk returns a tuple with the AutoApprovalMessageJSON field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoApprovalMessageJSON

`func (o *TemplateSlackAutoApprovalData) SetAutoApprovalMessageJSON(v string)`

SetAutoApprovalMessageJSON sets AutoApprovalMessageJSON field to given value.

### HasAutoApprovalMessageJSON

`func (o *TemplateSlackAutoApprovalData) HasAutoApprovalMessageJSON() bool`

HasAutoApprovalMessageJSON returns a boolean if a field has been set.

### SetAutoApprovalMessageJSONNil

`func (o *TemplateSlackAutoApprovalData) SetAutoApprovalMessageJSONNil(b bool)`

 SetAutoApprovalMessageJSONNil sets the value for AutoApprovalMessageJSON to be an explicit nil

### UnsetAutoApprovalMessageJSON
`func (o *TemplateSlackAutoApprovalData) UnsetAutoApprovalMessageJSON()`

UnsetAutoApprovalMessageJSON ensures that no value is present for AutoApprovalMessageJSON, not even an explicit nil
### GetAutoApprovalTitle

`func (o *TemplateSlackAutoApprovalData) GetAutoApprovalTitle() string`

GetAutoApprovalTitle returns the AutoApprovalTitle field if non-nil, zero value otherwise.

### GetAutoApprovalTitleOk

`func (o *TemplateSlackAutoApprovalData) GetAutoApprovalTitleOk() (*string, bool)`

GetAutoApprovalTitleOk returns a tuple with the AutoApprovalTitle field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoApprovalTitle

`func (o *TemplateSlackAutoApprovalData) SetAutoApprovalTitle(v string)`

SetAutoApprovalTitle sets AutoApprovalTitle field to given value.

### HasAutoApprovalTitle

`func (o *TemplateSlackAutoApprovalData) HasAutoApprovalTitle() bool`

HasAutoApprovalTitle returns a boolean if a field has been set.

### SetAutoApprovalTitleNil

`func (o *TemplateSlackAutoApprovalData) SetAutoApprovalTitleNil(b bool)`

 SetAutoApprovalTitleNil sets the value for AutoApprovalTitle to be an explicit nil

### UnsetAutoApprovalTitle
`func (o *TemplateSlackAutoApprovalData) UnsetAutoApprovalTitle()`

UnsetAutoApprovalTitle ensures that no value is present for AutoApprovalTitle, not even an explicit nil

