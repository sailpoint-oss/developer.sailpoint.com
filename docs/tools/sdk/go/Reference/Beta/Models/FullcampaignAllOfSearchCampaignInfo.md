---
id: beta-fullcampaign-all-of-search-campaign-info
title: FullcampaignAllOfSearchCampaignInfo
pagination_label: FullcampaignAllOfSearchCampaignInfo
sidebar_label: FullcampaignAllOfSearchCampaignInfo
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'FullcampaignAllOfSearchCampaignInfo', 'BetaFullcampaignAllOfSearchCampaignInfo'] 
slug: /tools/sdk/go/beta/models/fullcampaign-all-of-search-campaign-info
tags: ['SDK', 'Software Development Kit', 'FullcampaignAllOfSearchCampaignInfo', 'BetaFullcampaignAllOfSearchCampaignInfo']
---

# FullcampaignAllOfSearchCampaignInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | The type of search campaign represented. | 
**Description** | Pointer to **string** | Describes this search campaign. Intended for storing the query used, and possibly the number of identities selected/available. | [optional] 
**Reviewer** | Pointer to [**FullcampaignAllOfSearchCampaignInfoReviewer**](fullcampaign-all-of-search-campaign-info-reviewer) |  | [optional] 
**Query** | Pointer to **string** | The scope for the campaign. The campaign will cover identities returned by the query and identities that have access items returned by the query. One of &#x60;query&#x60; or &#x60;identityIds&#x60; must be set. | [optional] 
**IdentityIds** | Pointer to **[]string** | A direct list of identities to include in this campaign. One of &#x60;identityIds&#x60; or &#x60;query&#x60; must be set. | [optional] 
**AccessConstraints** | Pointer to [**[]AccessConstraint**](access-constraint) | Further reduces the scope of the campaign by excluding identities (from &#x60;query&#x60; or &#x60;identityIds&#x60;) that do not have this access. | [optional] 

## Methods

### NewFullcampaignAllOfSearchCampaignInfo

`func NewFullcampaignAllOfSearchCampaignInfo(type_ string, ) *FullcampaignAllOfSearchCampaignInfo`

NewFullcampaignAllOfSearchCampaignInfo instantiates a new FullcampaignAllOfSearchCampaignInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFullcampaignAllOfSearchCampaignInfoWithDefaults

`func NewFullcampaignAllOfSearchCampaignInfoWithDefaults() *FullcampaignAllOfSearchCampaignInfo`

NewFullcampaignAllOfSearchCampaignInfoWithDefaults instantiates a new FullcampaignAllOfSearchCampaignInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *FullcampaignAllOfSearchCampaignInfo) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *FullcampaignAllOfSearchCampaignInfo) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *FullcampaignAllOfSearchCampaignInfo) SetType(v string)`

SetType sets Type field to given value.


### GetDescription

`func (o *FullcampaignAllOfSearchCampaignInfo) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *FullcampaignAllOfSearchCampaignInfo) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *FullcampaignAllOfSearchCampaignInfo) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *FullcampaignAllOfSearchCampaignInfo) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetReviewer

`func (o *FullcampaignAllOfSearchCampaignInfo) GetReviewer() FullcampaignAllOfSearchCampaignInfoReviewer`

GetReviewer returns the Reviewer field if non-nil, zero value otherwise.

### GetReviewerOk

`func (o *FullcampaignAllOfSearchCampaignInfo) GetReviewerOk() (*FullcampaignAllOfSearchCampaignInfoReviewer, bool)`

GetReviewerOk returns a tuple with the Reviewer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReviewer

`func (o *FullcampaignAllOfSearchCampaignInfo) SetReviewer(v FullcampaignAllOfSearchCampaignInfoReviewer)`

SetReviewer sets Reviewer field to given value.

### HasReviewer

`func (o *FullcampaignAllOfSearchCampaignInfo) HasReviewer() bool`

HasReviewer returns a boolean if a field has been set.

### GetQuery

`func (o *FullcampaignAllOfSearchCampaignInfo) GetQuery() string`

GetQuery returns the Query field if non-nil, zero value otherwise.

### GetQueryOk

`func (o *FullcampaignAllOfSearchCampaignInfo) GetQueryOk() (*string, bool)`

GetQueryOk returns a tuple with the Query field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuery

`func (o *FullcampaignAllOfSearchCampaignInfo) SetQuery(v string)`

SetQuery sets Query field to given value.

### HasQuery

`func (o *FullcampaignAllOfSearchCampaignInfo) HasQuery() bool`

HasQuery returns a boolean if a field has been set.

### GetIdentityIds

`func (o *FullcampaignAllOfSearchCampaignInfo) GetIdentityIds() []string`

GetIdentityIds returns the IdentityIds field if non-nil, zero value otherwise.

### GetIdentityIdsOk

`func (o *FullcampaignAllOfSearchCampaignInfo) GetIdentityIdsOk() (*[]string, bool)`

GetIdentityIdsOk returns a tuple with the IdentityIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityIds

`func (o *FullcampaignAllOfSearchCampaignInfo) SetIdentityIds(v []string)`

SetIdentityIds sets IdentityIds field to given value.

### HasIdentityIds

`func (o *FullcampaignAllOfSearchCampaignInfo) HasIdentityIds() bool`

HasIdentityIds returns a boolean if a field has been set.

### GetAccessConstraints

`func (o *FullcampaignAllOfSearchCampaignInfo) GetAccessConstraints() []AccessConstraint`

GetAccessConstraints returns the AccessConstraints field if non-nil, zero value otherwise.

### GetAccessConstraintsOk

`func (o *FullcampaignAllOfSearchCampaignInfo) GetAccessConstraintsOk() (*[]AccessConstraint, bool)`

GetAccessConstraintsOk returns a tuple with the AccessConstraints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessConstraints

`func (o *FullcampaignAllOfSearchCampaignInfo) SetAccessConstraints(v []AccessConstraint)`

SetAccessConstraints sets AccessConstraints field to given value.

### HasAccessConstraints

`func (o *FullcampaignAllOfSearchCampaignInfo) HasAccessConstraints() bool`

HasAccessConstraints returns a boolean if a field has been set.


