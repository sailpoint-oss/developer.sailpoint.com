---
id: beta-sed
title: Sed
pagination_label: Sed
sidebar_label: Sed
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Sed', 'BetaSed'] 
slug: /tools/sdk/go/beta/models/sed
tags: ['SDK', 'Software Development Kit', 'Sed', 'BetaSed']
---

# Sed

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | name of the entitlement | [optional] 
**ApprovedBy** | Pointer to **string** | entitlement approved by | [optional] 
**ApprovedType** | Pointer to **string** | entitlement approved type | [optional] 
**ApprovedWhen** | Pointer to **SailPointTime** | entitlement approved then | [optional] 
**Attribute** | Pointer to **string** | entitlement attribute | [optional] 
**Description** | Pointer to **string** | description of entitlement | [optional] 
**DisplayName** | Pointer to **string** | entitlement display name | [optional] 
**Id** | Pointer to **string** | sed id | [optional] 
**SourceId** | Pointer to **string** | entitlement source id | [optional] 
**SourceName** | Pointer to **string** | entitlement source name | [optional] 
**Status** | Pointer to **string** | entitlement status | [optional] 
**SuggestedDescription** | Pointer to **string** | llm suggested entitlement description | [optional] 
**Type** | Pointer to **string** | entitlement type | [optional] 
**Value** | Pointer to **string** | entitlement value | [optional] 

## Methods

### NewSed

`func NewSed() *Sed`

NewSed instantiates a new Sed object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSedWithDefaults

`func NewSedWithDefaults() *Sed`

NewSedWithDefaults instantiates a new Sed object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Sed) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Sed) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Sed) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Sed) HasName() bool`

HasName returns a boolean if a field has been set.

### GetApprovedBy

`func (o *Sed) GetApprovedBy() string`

GetApprovedBy returns the ApprovedBy field if non-nil, zero value otherwise.

### GetApprovedByOk

`func (o *Sed) GetApprovedByOk() (*string, bool)`

GetApprovedByOk returns a tuple with the ApprovedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovedBy

`func (o *Sed) SetApprovedBy(v string)`

SetApprovedBy sets ApprovedBy field to given value.

### HasApprovedBy

`func (o *Sed) HasApprovedBy() bool`

HasApprovedBy returns a boolean if a field has been set.

### GetApprovedType

`func (o *Sed) GetApprovedType() string`

GetApprovedType returns the ApprovedType field if non-nil, zero value otherwise.

### GetApprovedTypeOk

`func (o *Sed) GetApprovedTypeOk() (*string, bool)`

GetApprovedTypeOk returns a tuple with the ApprovedType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovedType

`func (o *Sed) SetApprovedType(v string)`

SetApprovedType sets ApprovedType field to given value.

### HasApprovedType

`func (o *Sed) HasApprovedType() bool`

HasApprovedType returns a boolean if a field has been set.

### GetApprovedWhen

`func (o *Sed) GetApprovedWhen() SailPointTime`

GetApprovedWhen returns the ApprovedWhen field if non-nil, zero value otherwise.

### GetApprovedWhenOk

`func (o *Sed) GetApprovedWhenOk() (*SailPointTime, bool)`

GetApprovedWhenOk returns a tuple with the ApprovedWhen field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovedWhen

`func (o *Sed) SetApprovedWhen(v SailPointTime)`

SetApprovedWhen sets ApprovedWhen field to given value.

### HasApprovedWhen

`func (o *Sed) HasApprovedWhen() bool`

HasApprovedWhen returns a boolean if a field has been set.

### GetAttribute

`func (o *Sed) GetAttribute() string`

GetAttribute returns the Attribute field if non-nil, zero value otherwise.

### GetAttributeOk

`func (o *Sed) GetAttributeOk() (*string, bool)`

GetAttributeOk returns a tuple with the Attribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttribute

`func (o *Sed) SetAttribute(v string)`

SetAttribute sets Attribute field to given value.

### HasAttribute

`func (o *Sed) HasAttribute() bool`

HasAttribute returns a boolean if a field has been set.

### GetDescription

`func (o *Sed) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Sed) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Sed) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Sed) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDisplayName

`func (o *Sed) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *Sed) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *Sed) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *Sed) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetId

`func (o *Sed) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Sed) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Sed) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Sed) HasId() bool`

HasId returns a boolean if a field has been set.

### GetSourceId

`func (o *Sed) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *Sed) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *Sed) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *Sed) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetSourceName

`func (o *Sed) GetSourceName() string`

GetSourceName returns the SourceName field if non-nil, zero value otherwise.

### GetSourceNameOk

`func (o *Sed) GetSourceNameOk() (*string, bool)`

GetSourceNameOk returns a tuple with the SourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceName

`func (o *Sed) SetSourceName(v string)`

SetSourceName sets SourceName field to given value.

### HasSourceName

`func (o *Sed) HasSourceName() bool`

HasSourceName returns a boolean if a field has been set.

### GetStatus

`func (o *Sed) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Sed) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Sed) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Sed) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetSuggestedDescription

`func (o *Sed) GetSuggestedDescription() string`

GetSuggestedDescription returns the SuggestedDescription field if non-nil, zero value otherwise.

### GetSuggestedDescriptionOk

`func (o *Sed) GetSuggestedDescriptionOk() (*string, bool)`

GetSuggestedDescriptionOk returns a tuple with the SuggestedDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuggestedDescription

`func (o *Sed) SetSuggestedDescription(v string)`

SetSuggestedDescription sets SuggestedDescription field to given value.

### HasSuggestedDescription

`func (o *Sed) HasSuggestedDescription() bool`

HasSuggestedDescription returns a boolean if a field has been set.

### GetType

`func (o *Sed) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Sed) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Sed) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Sed) HasType() bool`

HasType returns a boolean if a field has been set.

### GetValue

`func (o *Sed) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *Sed) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *Sed) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *Sed) HasValue() bool`

HasValue returns a boolean if a field has been set.


