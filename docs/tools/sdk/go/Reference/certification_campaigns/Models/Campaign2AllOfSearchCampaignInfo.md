---
id: v1-campaign2-all-of-search-campaign-info
title: Campaign2AllOfSearchCampaignInfo
pagination_label: Campaign2AllOfSearchCampaignInfo
sidebar_label: Campaign2AllOfSearchCampaignInfo
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Campaign2AllOfSearchCampaignInfo', 'V1Campaign2AllOfSearchCampaignInfo'] 
slug: /tools/sdk/go/certificationcampaigns/models/campaign2-all-of-search-campaign-info
tags: ['SDK', 'Software Development Kit', 'Campaign2AllOfSearchCampaignInfo', 'V1Campaign2AllOfSearchCampaignInfo']
---

# Campaign2AllOfSearchCampaignInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | The type of search campaign represented. | 
**Description** | Pointer to **string** | Describes this search campaign. Intended for storing the query used, and possibly the number of identities selected/available. | [optional] 
**Reviewer** | Pointer to [**NullableCampaign2AllOfSearchCampaignInfoReviewer**](campaign2-all-of-search-campaign-info-reviewer) |  | [optional] 
**Query** | Pointer to **NullableString** | The scope for the campaign. The campaign will cover identities returned by the query and identities that have access items returned by the query. One of `query` or `identityIds` must be set. | [optional] 
**IdentityIds** | Pointer to **[]string** | A direct list of identities to include in this campaign. One of `identityIds` or `query` must be set. | [optional] 
**AccessConstraints** | Pointer to [**[]Accessconstraint**](accessconstraint) | Further reduces the scope of the campaign by excluding identities (from `query` or `identityIds`) that do not have this access. | [optional] 

## Methods

### NewCampaign2AllOfSearchCampaignInfo

`func NewCampaign2AllOfSearchCampaignInfo(type_ string, ) *Campaign2AllOfSearchCampaignInfo`

NewCampaign2AllOfSearchCampaignInfo instantiates a new Campaign2AllOfSearchCampaignInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCampaign2AllOfSearchCampaignInfoWithDefaults

`func NewCampaign2AllOfSearchCampaignInfoWithDefaults() *Campaign2AllOfSearchCampaignInfo`

NewCampaign2AllOfSearchCampaignInfoWithDefaults instantiates a new Campaign2AllOfSearchCampaignInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Campaign2AllOfSearchCampaignInfo) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Campaign2AllOfSearchCampaignInfo) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Campaign2AllOfSearchCampaignInfo) SetType(v string)`

SetType sets Type field to given value.


### GetDescription

`func (o *Campaign2AllOfSearchCampaignInfo) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Campaign2AllOfSearchCampaignInfo) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Campaign2AllOfSearchCampaignInfo) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Campaign2AllOfSearchCampaignInfo) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetReviewer

`func (o *Campaign2AllOfSearchCampaignInfo) GetReviewer() Campaign2AllOfSearchCampaignInfoReviewer`

GetReviewer returns the Reviewer field if non-nil, zero value otherwise.

### GetReviewerOk

`func (o *Campaign2AllOfSearchCampaignInfo) GetReviewerOk() (*Campaign2AllOfSearchCampaignInfoReviewer, bool)`

GetReviewerOk returns a tuple with the Reviewer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReviewer

`func (o *Campaign2AllOfSearchCampaignInfo) SetReviewer(v Campaign2AllOfSearchCampaignInfoReviewer)`

SetReviewer sets Reviewer field to given value.

### HasReviewer

`func (o *Campaign2AllOfSearchCampaignInfo) HasReviewer() bool`

HasReviewer returns a boolean if a field has been set.

### SetReviewerNil

`func (o *Campaign2AllOfSearchCampaignInfo) SetReviewerNil(b bool)`

 SetReviewerNil sets the value for Reviewer to be an explicit nil

### UnsetReviewer
`func (o *Campaign2AllOfSearchCampaignInfo) UnsetReviewer()`

UnsetReviewer ensures that no value is present for Reviewer, not even an explicit nil
### GetQuery

`func (o *Campaign2AllOfSearchCampaignInfo) GetQuery() string`

GetQuery returns the Query field if non-nil, zero value otherwise.

### GetQueryOk

`func (o *Campaign2AllOfSearchCampaignInfo) GetQueryOk() (*string, bool)`

GetQueryOk returns a tuple with the Query field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuery

`func (o *Campaign2AllOfSearchCampaignInfo) SetQuery(v string)`

SetQuery sets Query field to given value.

### HasQuery

`func (o *Campaign2AllOfSearchCampaignInfo) HasQuery() bool`

HasQuery returns a boolean if a field has been set.

### SetQueryNil

`func (o *Campaign2AllOfSearchCampaignInfo) SetQueryNil(b bool)`

 SetQueryNil sets the value for Query to be an explicit nil

### UnsetQuery
`func (o *Campaign2AllOfSearchCampaignInfo) UnsetQuery()`

UnsetQuery ensures that no value is present for Query, not even an explicit nil
### GetIdentityIds

`func (o *Campaign2AllOfSearchCampaignInfo) GetIdentityIds() []string`

GetIdentityIds returns the IdentityIds field if non-nil, zero value otherwise.

### GetIdentityIdsOk

`func (o *Campaign2AllOfSearchCampaignInfo) GetIdentityIdsOk() (*[]string, bool)`

GetIdentityIdsOk returns a tuple with the IdentityIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityIds

`func (o *Campaign2AllOfSearchCampaignInfo) SetIdentityIds(v []string)`

SetIdentityIds sets IdentityIds field to given value.

### HasIdentityIds

`func (o *Campaign2AllOfSearchCampaignInfo) HasIdentityIds() bool`

HasIdentityIds returns a boolean if a field has been set.

### SetIdentityIdsNil

`func (o *Campaign2AllOfSearchCampaignInfo) SetIdentityIdsNil(b bool)`

 SetIdentityIdsNil sets the value for IdentityIds to be an explicit nil

### UnsetIdentityIds
`func (o *Campaign2AllOfSearchCampaignInfo) UnsetIdentityIds()`

UnsetIdentityIds ensures that no value is present for IdentityIds, not even an explicit nil
### GetAccessConstraints

`func (o *Campaign2AllOfSearchCampaignInfo) GetAccessConstraints() []Accessconstraint`

GetAccessConstraints returns the AccessConstraints field if non-nil, zero value otherwise.

### GetAccessConstraintsOk

`func (o *Campaign2AllOfSearchCampaignInfo) GetAccessConstraintsOk() (*[]Accessconstraint, bool)`

GetAccessConstraintsOk returns a tuple with the AccessConstraints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessConstraints

`func (o *Campaign2AllOfSearchCampaignInfo) SetAccessConstraints(v []Accessconstraint)`

SetAccessConstraints sets AccessConstraints field to given value.

### HasAccessConstraints

`func (o *Campaign2AllOfSearchCampaignInfo) HasAccessConstraints() bool`

HasAccessConstraints returns a boolean if a field has been set.


