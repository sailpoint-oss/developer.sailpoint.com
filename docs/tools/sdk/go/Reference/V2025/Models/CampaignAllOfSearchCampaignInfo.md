---
id: campaign-all-of-search-campaign-info
title: CampaignAllOfSearchCampaignInfo
pagination_label: CampaignAllOfSearchCampaignInfo
sidebar_label: CampaignAllOfSearchCampaignInfo
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CampaignAllOfSearchCampaignInfo', 'CampaignAllOfSearchCampaignInfo'] 
slug: /tools/sdk/go//models/campaign-all-of-search-campaign-info
tags: ['SDK', 'Software Development Kit', 'CampaignAllOfSearchCampaignInfo', 'CampaignAllOfSearchCampaignInfo']
---

# CampaignAllOfSearchCampaignInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | The type of search campaign represented. | 
**Description** | Pointer to **string** | Describes this search campaign. Intended for storing the query used, and possibly the number of identities selected/available. | [optional] 
**Reviewer** | Pointer to [**NullableCampaignAllOfSearchCampaignInfoReviewer**](campaign-all-of-search-campaign-info-reviewer) |  | [optional] 
**Query** | Pointer to **NullableString** | The scope for the campaign. The campaign will cover identities returned by the query and identities that have access items returned by the query. One of `query` or `identityIds` must be set. | [optional] 
**IdentityIds** | Pointer to **[]string** | A direct list of identities to include in this campaign. One of `identityIds` or `query` must be set. | [optional] 
**AccessConstraints** | Pointer to [**[]AccessConstraint**](access-constraint) | Further reduces the scope of the campaign by excluding identities (from `query` or `identityIds`) that do not have this access. | [optional] 

## Methods

### NewCampaignAllOfSearchCampaignInfo

`func NewCampaignAllOfSearchCampaignInfo(type_ string, ) *CampaignAllOfSearchCampaignInfo`

NewCampaignAllOfSearchCampaignInfo instantiates a new CampaignAllOfSearchCampaignInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCampaignAllOfSearchCampaignInfoWithDefaults

`func NewCampaignAllOfSearchCampaignInfoWithDefaults() *CampaignAllOfSearchCampaignInfo`

NewCampaignAllOfSearchCampaignInfoWithDefaults instantiates a new CampaignAllOfSearchCampaignInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *CampaignAllOfSearchCampaignInfo) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CampaignAllOfSearchCampaignInfo) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CampaignAllOfSearchCampaignInfo) SetType(v string)`

SetType sets Type field to given value.


### GetDescription

`func (o *CampaignAllOfSearchCampaignInfo) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CampaignAllOfSearchCampaignInfo) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CampaignAllOfSearchCampaignInfo) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *CampaignAllOfSearchCampaignInfo) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetReviewer

`func (o *CampaignAllOfSearchCampaignInfo) GetReviewer() CampaignAllOfSearchCampaignInfoReviewer`

GetReviewer returns the Reviewer field if non-nil, zero value otherwise.

### GetReviewerOk

`func (o *CampaignAllOfSearchCampaignInfo) GetReviewerOk() (*CampaignAllOfSearchCampaignInfoReviewer, bool)`

GetReviewerOk returns a tuple with the Reviewer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReviewer

`func (o *CampaignAllOfSearchCampaignInfo) SetReviewer(v CampaignAllOfSearchCampaignInfoReviewer)`

SetReviewer sets Reviewer field to given value.

### HasReviewer

`func (o *CampaignAllOfSearchCampaignInfo) HasReviewer() bool`

HasReviewer returns a boolean if a field has been set.

### SetReviewerNil

`func (o *CampaignAllOfSearchCampaignInfo) SetReviewerNil(b bool)`

 SetReviewerNil sets the value for Reviewer to be an explicit nil

### UnsetReviewer
`func (o *CampaignAllOfSearchCampaignInfo) UnsetReviewer()`

UnsetReviewer ensures that no value is present for Reviewer, not even an explicit nil
### GetQuery

`func (o *CampaignAllOfSearchCampaignInfo) GetQuery() string`

GetQuery returns the Query field if non-nil, zero value otherwise.

### GetQueryOk

`func (o *CampaignAllOfSearchCampaignInfo) GetQueryOk() (*string, bool)`

GetQueryOk returns a tuple with the Query field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuery

`func (o *CampaignAllOfSearchCampaignInfo) SetQuery(v string)`

SetQuery sets Query field to given value.

### HasQuery

`func (o *CampaignAllOfSearchCampaignInfo) HasQuery() bool`

HasQuery returns a boolean if a field has been set.

### SetQueryNil

`func (o *CampaignAllOfSearchCampaignInfo) SetQueryNil(b bool)`

 SetQueryNil sets the value for Query to be an explicit nil

### UnsetQuery
`func (o *CampaignAllOfSearchCampaignInfo) UnsetQuery()`

UnsetQuery ensures that no value is present for Query, not even an explicit nil
### GetIdentityIds

`func (o *CampaignAllOfSearchCampaignInfo) GetIdentityIds() []string`

GetIdentityIds returns the IdentityIds field if non-nil, zero value otherwise.

### GetIdentityIdsOk

`func (o *CampaignAllOfSearchCampaignInfo) GetIdentityIdsOk() (*[]string, bool)`

GetIdentityIdsOk returns a tuple with the IdentityIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityIds

`func (o *CampaignAllOfSearchCampaignInfo) SetIdentityIds(v []string)`

SetIdentityIds sets IdentityIds field to given value.

### HasIdentityIds

`func (o *CampaignAllOfSearchCampaignInfo) HasIdentityIds() bool`

HasIdentityIds returns a boolean if a field has been set.

### SetIdentityIdsNil

`func (o *CampaignAllOfSearchCampaignInfo) SetIdentityIdsNil(b bool)`

 SetIdentityIdsNil sets the value for IdentityIds to be an explicit nil

### UnsetIdentityIds
`func (o *CampaignAllOfSearchCampaignInfo) UnsetIdentityIds()`

UnsetIdentityIds ensures that no value is present for IdentityIds, not even an explicit nil
### GetAccessConstraints

`func (o *CampaignAllOfSearchCampaignInfo) GetAccessConstraints() []AccessConstraint`

GetAccessConstraints returns the AccessConstraints field if non-nil, zero value otherwise.

### GetAccessConstraintsOk

`func (o *CampaignAllOfSearchCampaignInfo) GetAccessConstraintsOk() (*[]AccessConstraint, bool)`

GetAccessConstraintsOk returns a tuple with the AccessConstraints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessConstraints

`func (o *CampaignAllOfSearchCampaignInfo) SetAccessConstraints(v []AccessConstraint)`

SetAccessConstraints sets AccessConstraints field to given value.

### HasAccessConstraints

`func (o *CampaignAllOfSearchCampaignInfo) HasAccessConstraints() bool`

HasAccessConstraints returns a boolean if a field has been set.


