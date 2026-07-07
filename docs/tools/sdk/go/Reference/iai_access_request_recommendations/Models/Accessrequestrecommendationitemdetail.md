---
id: v1-accessrequestrecommendationitemdetail
title: Accessrequestrecommendationitemdetail
pagination_label: Accessrequestrecommendationitemdetail
sidebar_label: Accessrequestrecommendationitemdetail
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accessrequestrecommendationitemdetail', 'V1Accessrequestrecommendationitemdetail'] 
slug: /tools/sdk/go/iaiaccessrequestrecommendations/models/accessrequestrecommendationitemdetail
tags: ['SDK', 'Software Development Kit', 'Accessrequestrecommendationitemdetail', 'V1Accessrequestrecommendationitemdetail']
---

# Accessrequestrecommendationitemdetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityId** | Pointer to **string** | Identity ID for the recommendation | [optional] 
**Access** | Pointer to [**AccessrequestrecommendationitemdetailAccess**](accessrequestrecommendationitemdetail-access) |  | [optional] 
**Ignored** | Pointer to **bool** | Whether or not the identity has already chosen to ignore this recommendation. | [optional] 
**Requested** | Pointer to **bool** | Whether or not the identity has already chosen to request this recommendation. | [optional] 
**Viewed** | Pointer to **bool** | Whether or not the identity reportedly viewed this recommendation. | [optional] 
**Messages** | Pointer to [**[]Accessrecommendationmessage**](accessrecommendationmessage) |  | [optional] 
**TranslationMessages** | Pointer to [**[]Translationmessage**](translationmessage) | The list of translation messages | [optional] 

## Methods

### NewAccessrequestrecommendationitemdetail

`func NewAccessrequestrecommendationitemdetail() *Accessrequestrecommendationitemdetail`

NewAccessrequestrecommendationitemdetail instantiates a new Accessrequestrecommendationitemdetail object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessrequestrecommendationitemdetailWithDefaults

`func NewAccessrequestrecommendationitemdetailWithDefaults() *Accessrequestrecommendationitemdetail`

NewAccessrequestrecommendationitemdetailWithDefaults instantiates a new Accessrequestrecommendationitemdetail object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentityId

`func (o *Accessrequestrecommendationitemdetail) GetIdentityId() string`

GetIdentityId returns the IdentityId field if non-nil, zero value otherwise.

### GetIdentityIdOk

`func (o *Accessrequestrecommendationitemdetail) GetIdentityIdOk() (*string, bool)`

GetIdentityIdOk returns a tuple with the IdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityId

`func (o *Accessrequestrecommendationitemdetail) SetIdentityId(v string)`

SetIdentityId sets IdentityId field to given value.

### HasIdentityId

`func (o *Accessrequestrecommendationitemdetail) HasIdentityId() bool`

HasIdentityId returns a boolean if a field has been set.

### GetAccess

`func (o *Accessrequestrecommendationitemdetail) GetAccess() AccessrequestrecommendationitemdetailAccess`

GetAccess returns the Access field if non-nil, zero value otherwise.

### GetAccessOk

`func (o *Accessrequestrecommendationitemdetail) GetAccessOk() (*AccessrequestrecommendationitemdetailAccess, bool)`

GetAccessOk returns a tuple with the Access field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccess

`func (o *Accessrequestrecommendationitemdetail) SetAccess(v AccessrequestrecommendationitemdetailAccess)`

SetAccess sets Access field to given value.

### HasAccess

`func (o *Accessrequestrecommendationitemdetail) HasAccess() bool`

HasAccess returns a boolean if a field has been set.

### GetIgnored

`func (o *Accessrequestrecommendationitemdetail) GetIgnored() bool`

GetIgnored returns the Ignored field if non-nil, zero value otherwise.

### GetIgnoredOk

`func (o *Accessrequestrecommendationitemdetail) GetIgnoredOk() (*bool, bool)`

GetIgnoredOk returns a tuple with the Ignored field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIgnored

`func (o *Accessrequestrecommendationitemdetail) SetIgnored(v bool)`

SetIgnored sets Ignored field to given value.

### HasIgnored

`func (o *Accessrequestrecommendationitemdetail) HasIgnored() bool`

HasIgnored returns a boolean if a field has been set.

### GetRequested

`func (o *Accessrequestrecommendationitemdetail) GetRequested() bool`

GetRequested returns the Requested field if non-nil, zero value otherwise.

### GetRequestedOk

`func (o *Accessrequestrecommendationitemdetail) GetRequestedOk() (*bool, bool)`

GetRequestedOk returns a tuple with the Requested field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequested

`func (o *Accessrequestrecommendationitemdetail) SetRequested(v bool)`

SetRequested sets Requested field to given value.

### HasRequested

`func (o *Accessrequestrecommendationitemdetail) HasRequested() bool`

HasRequested returns a boolean if a field has been set.

### GetViewed

`func (o *Accessrequestrecommendationitemdetail) GetViewed() bool`

GetViewed returns the Viewed field if non-nil, zero value otherwise.

### GetViewedOk

`func (o *Accessrequestrecommendationitemdetail) GetViewedOk() (*bool, bool)`

GetViewedOk returns a tuple with the Viewed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetViewed

`func (o *Accessrequestrecommendationitemdetail) SetViewed(v bool)`

SetViewed sets Viewed field to given value.

### HasViewed

`func (o *Accessrequestrecommendationitemdetail) HasViewed() bool`

HasViewed returns a boolean if a field has been set.

### GetMessages

`func (o *Accessrequestrecommendationitemdetail) GetMessages() []Accessrecommendationmessage`

GetMessages returns the Messages field if non-nil, zero value otherwise.

### GetMessagesOk

`func (o *Accessrequestrecommendationitemdetail) GetMessagesOk() (*[]Accessrecommendationmessage, bool)`

GetMessagesOk returns a tuple with the Messages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessages

`func (o *Accessrequestrecommendationitemdetail) SetMessages(v []Accessrecommendationmessage)`

SetMessages sets Messages field to given value.

### HasMessages

`func (o *Accessrequestrecommendationitemdetail) HasMessages() bool`

HasMessages returns a boolean if a field has been set.

### GetTranslationMessages

`func (o *Accessrequestrecommendationitemdetail) GetTranslationMessages() []Translationmessage`

GetTranslationMessages returns the TranslationMessages field if non-nil, zero value otherwise.

### GetTranslationMessagesOk

`func (o *Accessrequestrecommendationitemdetail) GetTranslationMessagesOk() (*[]Translationmessage, bool)`

GetTranslationMessagesOk returns a tuple with the TranslationMessages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTranslationMessages

`func (o *Accessrequestrecommendationitemdetail) SetTranslationMessages(v []Translationmessage)`

SetTranslationMessages sets TranslationMessages field to given value.

### HasTranslationMessages

`func (o *Accessrequestrecommendationitemdetail) HasTranslationMessages() bool`

HasTranslationMessages returns a boolean if a field has been set.


