---
id: beta-outlier
title: Outlier
pagination_label: Outlier
sidebar_label: Outlier
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Outlier', 'BetaOutlier'] 
slug: /tools/sdk/go/beta/models/outlier
tags: ['SDK', 'Software Development Kit', 'Outlier', 'BetaOutlier']
---

# Outlier

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The identity&#39;s unique identifier for the outlier record | [optional] 
**IdentityId** | Pointer to **string** | The ID of the identity that is detected as an outlier | [optional] 
**Type** | Pointer to **string** | The type of outlier summary | [optional] 
**FirstDetectionDate** | Pointer to **time.Time** | The first date the outlier was detected | [optional] 
**LatestDetectionDate** | Pointer to **time.Time** | The most recent date the outlier was detected | [optional] 
**Ignored** | Pointer to **bool** | Flag whether or not the outlier has been ignored | [optional] 
**Attributes** | Pointer to **map[string]interface{}** | Object containing mapped identity attributes | [optional] 
**Score** | Pointer to **float32** | The outlier score determined by the detection engine ranging from 0..1 | [optional] 
**UnignoreType** | Pointer to **NullableString** | Enum value of if the outlier manually or automatically un-ignored. Will be NULL if outlier is not ignored | [optional] 
**UnignoreDate** | Pointer to **NullableTime** | shows date when last time has been unignored outlier | [optional] 
**IgnoreDate** | Pointer to **NullableTime** | shows date when last time has been ignored outlier | [optional] 

## Methods

### NewOutlier

`func NewOutlier() *Outlier`

NewOutlier instantiates a new Outlier object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOutlierWithDefaults

`func NewOutlierWithDefaults() *Outlier`

NewOutlierWithDefaults instantiates a new Outlier object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Outlier) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Outlier) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Outlier) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Outlier) HasId() bool`

HasId returns a boolean if a field has been set.

### GetIdentityId

`func (o *Outlier) GetIdentityId() string`

GetIdentityId returns the IdentityId field if non-nil, zero value otherwise.

### GetIdentityIdOk

`func (o *Outlier) GetIdentityIdOk() (*string, bool)`

GetIdentityIdOk returns a tuple with the IdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityId

`func (o *Outlier) SetIdentityId(v string)`

SetIdentityId sets IdentityId field to given value.

### HasIdentityId

`func (o *Outlier) HasIdentityId() bool`

HasIdentityId returns a boolean if a field has been set.

### GetType

`func (o *Outlier) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Outlier) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Outlier) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Outlier) HasType() bool`

HasType returns a boolean if a field has been set.

### GetFirstDetectionDate

`func (o *Outlier) GetFirstDetectionDate() time.Time`

GetFirstDetectionDate returns the FirstDetectionDate field if non-nil, zero value otherwise.

### GetFirstDetectionDateOk

`func (o *Outlier) GetFirstDetectionDateOk() (*time.Time, bool)`

GetFirstDetectionDateOk returns a tuple with the FirstDetectionDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstDetectionDate

`func (o *Outlier) SetFirstDetectionDate(v time.Time)`

SetFirstDetectionDate sets FirstDetectionDate field to given value.

### HasFirstDetectionDate

`func (o *Outlier) HasFirstDetectionDate() bool`

HasFirstDetectionDate returns a boolean if a field has been set.

### GetLatestDetectionDate

`func (o *Outlier) GetLatestDetectionDate() time.Time`

GetLatestDetectionDate returns the LatestDetectionDate field if non-nil, zero value otherwise.

### GetLatestDetectionDateOk

`func (o *Outlier) GetLatestDetectionDateOk() (*time.Time, bool)`

GetLatestDetectionDateOk returns a tuple with the LatestDetectionDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLatestDetectionDate

`func (o *Outlier) SetLatestDetectionDate(v time.Time)`

SetLatestDetectionDate sets LatestDetectionDate field to given value.

### HasLatestDetectionDate

`func (o *Outlier) HasLatestDetectionDate() bool`

HasLatestDetectionDate returns a boolean if a field has been set.

### GetIgnored

`func (o *Outlier) GetIgnored() bool`

GetIgnored returns the Ignored field if non-nil, zero value otherwise.

### GetIgnoredOk

`func (o *Outlier) GetIgnoredOk() (*bool, bool)`

GetIgnoredOk returns a tuple with the Ignored field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIgnored

`func (o *Outlier) SetIgnored(v bool)`

SetIgnored sets Ignored field to given value.

### HasIgnored

`func (o *Outlier) HasIgnored() bool`

HasIgnored returns a boolean if a field has been set.

### GetAttributes

`func (o *Outlier) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *Outlier) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *Outlier) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *Outlier) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### GetScore

`func (o *Outlier) GetScore() float32`

GetScore returns the Score field if non-nil, zero value otherwise.

### GetScoreOk

`func (o *Outlier) GetScoreOk() (*float32, bool)`

GetScoreOk returns a tuple with the Score field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScore

`func (o *Outlier) SetScore(v float32)`

SetScore sets Score field to given value.

### HasScore

`func (o *Outlier) HasScore() bool`

HasScore returns a boolean if a field has been set.

### GetUnignoreType

`func (o *Outlier) GetUnignoreType() string`

GetUnignoreType returns the UnignoreType field if non-nil, zero value otherwise.

### GetUnignoreTypeOk

`func (o *Outlier) GetUnignoreTypeOk() (*string, bool)`

GetUnignoreTypeOk returns a tuple with the UnignoreType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUnignoreType

`func (o *Outlier) SetUnignoreType(v string)`

SetUnignoreType sets UnignoreType field to given value.

### HasUnignoreType

`func (o *Outlier) HasUnignoreType() bool`

HasUnignoreType returns a boolean if a field has been set.

### SetUnignoreTypeNil

`func (o *Outlier) SetUnignoreTypeNil(b bool)`

 SetUnignoreTypeNil sets the value for UnignoreType to be an explicit nil

### UnsetUnignoreType
`func (o *Outlier) UnsetUnignoreType()`

UnsetUnignoreType ensures that no value is present for UnignoreType, not even an explicit nil
### GetUnignoreDate

`func (o *Outlier) GetUnignoreDate() time.Time`

GetUnignoreDate returns the UnignoreDate field if non-nil, zero value otherwise.

### GetUnignoreDateOk

`func (o *Outlier) GetUnignoreDateOk() (*time.Time, bool)`

GetUnignoreDateOk returns a tuple with the UnignoreDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUnignoreDate

`func (o *Outlier) SetUnignoreDate(v time.Time)`

SetUnignoreDate sets UnignoreDate field to given value.

### HasUnignoreDate

`func (o *Outlier) HasUnignoreDate() bool`

HasUnignoreDate returns a boolean if a field has been set.

### SetUnignoreDateNil

`func (o *Outlier) SetUnignoreDateNil(b bool)`

 SetUnignoreDateNil sets the value for UnignoreDate to be an explicit nil

### UnsetUnignoreDate
`func (o *Outlier) UnsetUnignoreDate()`

UnsetUnignoreDate ensures that no value is present for UnignoreDate, not even an explicit nil
### GetIgnoreDate

`func (o *Outlier) GetIgnoreDate() time.Time`

GetIgnoreDate returns the IgnoreDate field if non-nil, zero value otherwise.

### GetIgnoreDateOk

`func (o *Outlier) GetIgnoreDateOk() (*time.Time, bool)`

GetIgnoreDateOk returns a tuple with the IgnoreDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIgnoreDate

`func (o *Outlier) SetIgnoreDate(v time.Time)`

SetIgnoreDate sets IgnoreDate field to given value.

### HasIgnoreDate

`func (o *Outlier) HasIgnoreDate() bool`

HasIgnoreDate returns a boolean if a field has been set.

### SetIgnoreDateNil

`func (o *Outlier) SetIgnoreDateNil(b bool)`

 SetIgnoreDateNil sets the value for IgnoreDate to be an explicit nil

### UnsetIgnoreDate
`func (o *Outlier) UnsetIgnoreDate()`

UnsetIgnoreDate ensures that no value is present for IgnoreDate, not even an explicit nil

