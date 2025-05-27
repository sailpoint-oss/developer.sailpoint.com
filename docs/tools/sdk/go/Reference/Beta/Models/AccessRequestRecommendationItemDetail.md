---
id: beta-access-request-recommendation-item-detail
title: AccessRequestRecommendationItemDetail
pagination_label: AccessRequestRecommendationItemDetail
sidebar_label: AccessRequestRecommendationItemDetail
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessRequestRecommendationItemDetail', 'BetaAccessRequestRecommendationItemDetail'] 
slug: /tools/sdk/go/beta/models/access-request-recommendation-item-detail
tags: ['SDK', 'Software Development Kit', 'AccessRequestRecommendationItemDetail', 'BetaAccessRequestRecommendationItemDetail']
---

# AccessRequestRecommendationItemDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityId** | Pointer to **string** | Identity ID for the recommendation | [optional] 
**Access** | Pointer to [**AccessRequestRecommendationItemDetailAccess**](access-request-recommendation-item-detail-access) |  | [optional] 
**Ignored** | Pointer to **bool** | Whether or not the identity has already chosen to ignore this recommendation. | [optional] 
**Requested** | Pointer to **bool** | Whether or not the identity has already chosen to request this recommendation. | [optional] 
**Viewed** | Pointer to **bool** | Whether or not the identity reportedly viewed this recommendation. | [optional] 
**Messages** | Pointer to [**[]AccessRecommendationMessage**](access-recommendation-message) |  | [optional] 
**TranslationMessages** | Pointer to [**[]TranslationMessage**](translation-message) | The list of translation messages | [optional] 

## Methods

### NewAccessRequestRecommendationItemDetail

`func NewAccessRequestRecommendationItemDetail() *AccessRequestRecommendationItemDetail`

NewAccessRequestRecommendationItemDetail instantiates a new AccessRequestRecommendationItemDetail object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessRequestRecommendationItemDetailWithDefaults

`func NewAccessRequestRecommendationItemDetailWithDefaults() *AccessRequestRecommendationItemDetail`

NewAccessRequestRecommendationItemDetailWithDefaults instantiates a new AccessRequestRecommendationItemDetail object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentityId

`func (o *AccessRequestRecommendationItemDetail) GetIdentityId() string`

GetIdentityId returns the IdentityId field if non-nil, zero value otherwise.

### GetIdentityIdOk

`func (o *AccessRequestRecommendationItemDetail) GetIdentityIdOk() (*string, bool)`

GetIdentityIdOk returns a tuple with the IdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityId

`func (o *AccessRequestRecommendationItemDetail) SetIdentityId(v string)`

SetIdentityId sets IdentityId field to given value.

### HasIdentityId

`func (o *AccessRequestRecommendationItemDetail) HasIdentityId() bool`

HasIdentityId returns a boolean if a field has been set.

### GetAccess

`func (o *AccessRequestRecommendationItemDetail) GetAccess() AccessRequestRecommendationItemDetailAccess`

GetAccess returns the Access field if non-nil, zero value otherwise.

### GetAccessOk

`func (o *AccessRequestRecommendationItemDetail) GetAccessOk() (*AccessRequestRecommendationItemDetailAccess, bool)`

GetAccessOk returns a tuple with the Access field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccess

`func (o *AccessRequestRecommendationItemDetail) SetAccess(v AccessRequestRecommendationItemDetailAccess)`

SetAccess sets Access field to given value.

### HasAccess

`func (o *AccessRequestRecommendationItemDetail) HasAccess() bool`

HasAccess returns a boolean if a field has been set.

### GetIgnored

`func (o *AccessRequestRecommendationItemDetail) GetIgnored() bool`

GetIgnored returns the Ignored field if non-nil, zero value otherwise.

### GetIgnoredOk

`func (o *AccessRequestRecommendationItemDetail) GetIgnoredOk() (*bool, bool)`

GetIgnoredOk returns a tuple with the Ignored field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIgnored

`func (o *AccessRequestRecommendationItemDetail) SetIgnored(v bool)`

SetIgnored sets Ignored field to given value.

### HasIgnored

`func (o *AccessRequestRecommendationItemDetail) HasIgnored() bool`

HasIgnored returns a boolean if a field has been set.

### GetRequested

`func (o *AccessRequestRecommendationItemDetail) GetRequested() bool`

GetRequested returns the Requested field if non-nil, zero value otherwise.

### GetRequestedOk

`func (o *AccessRequestRecommendationItemDetail) GetRequestedOk() (*bool, bool)`

GetRequestedOk returns a tuple with the Requested field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequested

`func (o *AccessRequestRecommendationItemDetail) SetRequested(v bool)`

SetRequested sets Requested field to given value.

### HasRequested

`func (o *AccessRequestRecommendationItemDetail) HasRequested() bool`

HasRequested returns a boolean if a field has been set.

### GetViewed

`func (o *AccessRequestRecommendationItemDetail) GetViewed() bool`

GetViewed returns the Viewed field if non-nil, zero value otherwise.

### GetViewedOk

`func (o *AccessRequestRecommendationItemDetail) GetViewedOk() (*bool, bool)`

GetViewedOk returns a tuple with the Viewed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetViewed

`func (o *AccessRequestRecommendationItemDetail) SetViewed(v bool)`

SetViewed sets Viewed field to given value.

### HasViewed

`func (o *AccessRequestRecommendationItemDetail) HasViewed() bool`

HasViewed returns a boolean if a field has been set.

### GetMessages

`func (o *AccessRequestRecommendationItemDetail) GetMessages() []AccessRecommendationMessage`

GetMessages returns the Messages field if non-nil, zero value otherwise.

### GetMessagesOk

`func (o *AccessRequestRecommendationItemDetail) GetMessagesOk() (*[]AccessRecommendationMessage, bool)`

GetMessagesOk returns a tuple with the Messages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessages

`func (o *AccessRequestRecommendationItemDetail) SetMessages(v []AccessRecommendationMessage)`

SetMessages sets Messages field to given value.

### HasMessages

`func (o *AccessRequestRecommendationItemDetail) HasMessages() bool`

HasMessages returns a boolean if a field has been set.

### GetTranslationMessages

`func (o *AccessRequestRecommendationItemDetail) GetTranslationMessages() []TranslationMessage`

GetTranslationMessages returns the TranslationMessages field if non-nil, zero value otherwise.

### GetTranslationMessagesOk

`func (o *AccessRequestRecommendationItemDetail) GetTranslationMessagesOk() (*[]TranslationMessage, bool)`

GetTranslationMessagesOk returns a tuple with the TranslationMessages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTranslationMessages

`func (o *AccessRequestRecommendationItemDetail) SetTranslationMessages(v []TranslationMessage)`

SetTranslationMessages sets TranslationMessages field to given value.

### HasTranslationMessages

`func (o *AccessRequestRecommendationItemDetail) HasTranslationMessages() bool`

HasTranslationMessages returns a boolean if a field has been set.


