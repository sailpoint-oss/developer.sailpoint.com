---
id: v1-accountaction
title: Accountaction
pagination_label: Accountaction
sidebar_label: Accountaction
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accountaction', 'V1Accountaction'] 
slug: /tools/sdk/go/lifecyclestates/models/accountaction
tags: ['SDK', 'Software Development Kit', 'Accountaction', 'V1Accountaction']
---

# Accountaction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Action** | Pointer to **string** | Describes if action will be enable, disable or delete. | [optional] 
**SourceIds** | Pointer to **[]string** | A unique list of specific source IDs to apply the action to. The sources must have the ENABLE feature or flat file source. Required if allSources is not true. Must not be provided if allSources is true. Cannot be used together with excludeSourceIds See \"/sources\" endpoint for source features. | [optional] 
**ExcludeSourceIds** | Pointer to **[]string** | A list of source IDs to exclude from the action. Cannot be used together with sourceIds. | [optional] 
**AllSources** | Pointer to **bool** | If true, the action applies to all available sources. If true, sourceIds must not be provided. If false or not set, sourceIds is required. | [optional] [default to false]

## Methods

### NewAccountaction

`func NewAccountaction() *Accountaction`

NewAccountaction instantiates a new Accountaction object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountactionWithDefaults

`func NewAccountactionWithDefaults() *Accountaction`

NewAccountactionWithDefaults instantiates a new Accountaction object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAction

`func (o *Accountaction) GetAction() string`

GetAction returns the Action field if non-nil, zero value otherwise.

### GetActionOk

`func (o *Accountaction) GetActionOk() (*string, bool)`

GetActionOk returns a tuple with the Action field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAction

`func (o *Accountaction) SetAction(v string)`

SetAction sets Action field to given value.

### HasAction

`func (o *Accountaction) HasAction() bool`

HasAction returns a boolean if a field has been set.

### GetSourceIds

`func (o *Accountaction) GetSourceIds() []string`

GetSourceIds returns the SourceIds field if non-nil, zero value otherwise.

### GetSourceIdsOk

`func (o *Accountaction) GetSourceIdsOk() (*[]string, bool)`

GetSourceIdsOk returns a tuple with the SourceIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceIds

`func (o *Accountaction) SetSourceIds(v []string)`

SetSourceIds sets SourceIds field to given value.

### HasSourceIds

`func (o *Accountaction) HasSourceIds() bool`

HasSourceIds returns a boolean if a field has been set.

### SetSourceIdsNil

`func (o *Accountaction) SetSourceIdsNil(b bool)`

 SetSourceIdsNil sets the value for SourceIds to be an explicit nil

### UnsetSourceIds
`func (o *Accountaction) UnsetSourceIds()`

UnsetSourceIds ensures that no value is present for SourceIds, not even an explicit nil
### GetExcludeSourceIds

`func (o *Accountaction) GetExcludeSourceIds() []string`

GetExcludeSourceIds returns the ExcludeSourceIds field if non-nil, zero value otherwise.

### GetExcludeSourceIdsOk

`func (o *Accountaction) GetExcludeSourceIdsOk() (*[]string, bool)`

GetExcludeSourceIdsOk returns a tuple with the ExcludeSourceIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludeSourceIds

`func (o *Accountaction) SetExcludeSourceIds(v []string)`

SetExcludeSourceIds sets ExcludeSourceIds field to given value.

### HasExcludeSourceIds

`func (o *Accountaction) HasExcludeSourceIds() bool`

HasExcludeSourceIds returns a boolean if a field has been set.

### SetExcludeSourceIdsNil

`func (o *Accountaction) SetExcludeSourceIdsNil(b bool)`

 SetExcludeSourceIdsNil sets the value for ExcludeSourceIds to be an explicit nil

### UnsetExcludeSourceIds
`func (o *Accountaction) UnsetExcludeSourceIds()`

UnsetExcludeSourceIds ensures that no value is present for ExcludeSourceIds, not even an explicit nil
### GetAllSources

`func (o *Accountaction) GetAllSources() bool`

GetAllSources returns the AllSources field if non-nil, zero value otherwise.

### GetAllSourcesOk

`func (o *Accountaction) GetAllSourcesOk() (*bool, bool)`

GetAllSourcesOk returns a tuple with the AllSources field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllSources

`func (o *Accountaction) SetAllSources(v bool)`

SetAllSources sets AllSources field to given value.

### HasAllSources

`func (o *Accountaction) HasAllSources() bool`

HasAllSources returns a boolean if a field has been set.


