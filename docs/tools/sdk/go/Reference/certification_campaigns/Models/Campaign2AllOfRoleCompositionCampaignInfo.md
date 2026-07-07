---
id: v1-campaign2-all-of-role-composition-campaign-info
title: Campaign2AllOfRoleCompositionCampaignInfo
pagination_label: Campaign2AllOfRoleCompositionCampaignInfo
sidebar_label: Campaign2AllOfRoleCompositionCampaignInfo
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Campaign2AllOfRoleCompositionCampaignInfo', 'V1Campaign2AllOfRoleCompositionCampaignInfo'] 
slug: /tools/sdk/go/certificationcampaigns/models/campaign2-all-of-role-composition-campaign-info
tags: ['SDK', 'Software Development Kit', 'Campaign2AllOfRoleCompositionCampaignInfo', 'V1Campaign2AllOfRoleCompositionCampaignInfo']
---

# Campaign2AllOfRoleCompositionCampaignInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReviewerId** | Pointer to **NullableString** | The ID of the identity or governance group reviewing this campaign. Deprecated in favor of the \"reviewer\" object. | [optional] 
**Reviewer** | Pointer to [**NullableCampaign2AllOfRoleCompositionCampaignInfoReviewer**](campaign2-all-of-role-composition-campaign-info-reviewer) |  | [optional] 
**RoleIds** | Pointer to **[]string** | Optional list of roles to include in this campaign. Only one of `roleIds` and `query` may be set; if neither are set, all roles are included. | [optional] 
**RemediatorRef** | [**Campaign2AllOfRoleCompositionCampaignInfoRemediatorRef**](campaign2-all-of-role-composition-campaign-info-remediator-ref) |  | 
**Query** | Pointer to **NullableString** | Optional search query to scope this campaign to a set of roles. Only one of `roleIds` and `query` may be set; if neither are set, all roles are included. | [optional] 
**Description** | Pointer to **NullableString** | Describes this role composition campaign. Intended for storing the query used, and possibly the number of roles selected/available. | [optional] 

## Methods

### NewCampaign2AllOfRoleCompositionCampaignInfo

`func NewCampaign2AllOfRoleCompositionCampaignInfo(remediatorRef Campaign2AllOfRoleCompositionCampaignInfoRemediatorRef, ) *Campaign2AllOfRoleCompositionCampaignInfo`

NewCampaign2AllOfRoleCompositionCampaignInfo instantiates a new Campaign2AllOfRoleCompositionCampaignInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCampaign2AllOfRoleCompositionCampaignInfoWithDefaults

`func NewCampaign2AllOfRoleCompositionCampaignInfoWithDefaults() *Campaign2AllOfRoleCompositionCampaignInfo`

NewCampaign2AllOfRoleCompositionCampaignInfoWithDefaults instantiates a new Campaign2AllOfRoleCompositionCampaignInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReviewerId

`func (o *Campaign2AllOfRoleCompositionCampaignInfo) GetReviewerId() string`

GetReviewerId returns the ReviewerId field if non-nil, zero value otherwise.

### GetReviewerIdOk

`func (o *Campaign2AllOfRoleCompositionCampaignInfo) GetReviewerIdOk() (*string, bool)`

GetReviewerIdOk returns a tuple with the ReviewerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReviewerId

`func (o *Campaign2AllOfRoleCompositionCampaignInfo) SetReviewerId(v string)`

SetReviewerId sets ReviewerId field to given value.

### HasReviewerId

`func (o *Campaign2AllOfRoleCompositionCampaignInfo) HasReviewerId() bool`

HasReviewerId returns a boolean if a field has been set.

### SetReviewerIdNil

`func (o *Campaign2AllOfRoleCompositionCampaignInfo) SetReviewerIdNil(b bool)`

 SetReviewerIdNil sets the value for ReviewerId to be an explicit nil

### UnsetReviewerId
`func (o *Campaign2AllOfRoleCompositionCampaignInfo) UnsetReviewerId()`

UnsetReviewerId ensures that no value is present for ReviewerId, not even an explicit nil
### GetReviewer

`func (o *Campaign2AllOfRoleCompositionCampaignInfo) GetReviewer() Campaign2AllOfRoleCompositionCampaignInfoReviewer`

GetReviewer returns the Reviewer field if non-nil, zero value otherwise.

### GetReviewerOk

`func (o *Campaign2AllOfRoleCompositionCampaignInfo) GetReviewerOk() (*Campaign2AllOfRoleCompositionCampaignInfoReviewer, bool)`

GetReviewerOk returns a tuple with the Reviewer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReviewer

`func (o *Campaign2AllOfRoleCompositionCampaignInfo) SetReviewer(v Campaign2AllOfRoleCompositionCampaignInfoReviewer)`

SetReviewer sets Reviewer field to given value.

### HasReviewer

`func (o *Campaign2AllOfRoleCompositionCampaignInfo) HasReviewer() bool`

HasReviewer returns a boolean if a field has been set.

### SetReviewerNil

`func (o *Campaign2AllOfRoleCompositionCampaignInfo) SetReviewerNil(b bool)`

 SetReviewerNil sets the value for Reviewer to be an explicit nil

### UnsetReviewer
`func (o *Campaign2AllOfRoleCompositionCampaignInfo) UnsetReviewer()`

UnsetReviewer ensures that no value is present for Reviewer, not even an explicit nil
### GetRoleIds

`func (o *Campaign2AllOfRoleCompositionCampaignInfo) GetRoleIds() []string`

GetRoleIds returns the RoleIds field if non-nil, zero value otherwise.

### GetRoleIdsOk

`func (o *Campaign2AllOfRoleCompositionCampaignInfo) GetRoleIdsOk() (*[]string, bool)`

GetRoleIdsOk returns a tuple with the RoleIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoleIds

`func (o *Campaign2AllOfRoleCompositionCampaignInfo) SetRoleIds(v []string)`

SetRoleIds sets RoleIds field to given value.

### HasRoleIds

`func (o *Campaign2AllOfRoleCompositionCampaignInfo) HasRoleIds() bool`

HasRoleIds returns a boolean if a field has been set.

### GetRemediatorRef

`func (o *Campaign2AllOfRoleCompositionCampaignInfo) GetRemediatorRef() Campaign2AllOfRoleCompositionCampaignInfoRemediatorRef`

GetRemediatorRef returns the RemediatorRef field if non-nil, zero value otherwise.

### GetRemediatorRefOk

`func (o *Campaign2AllOfRoleCompositionCampaignInfo) GetRemediatorRefOk() (*Campaign2AllOfRoleCompositionCampaignInfoRemediatorRef, bool)`

GetRemediatorRefOk returns a tuple with the RemediatorRef field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemediatorRef

`func (o *Campaign2AllOfRoleCompositionCampaignInfo) SetRemediatorRef(v Campaign2AllOfRoleCompositionCampaignInfoRemediatorRef)`

SetRemediatorRef sets RemediatorRef field to given value.


### GetQuery

`func (o *Campaign2AllOfRoleCompositionCampaignInfo) GetQuery() string`

GetQuery returns the Query field if non-nil, zero value otherwise.

### GetQueryOk

`func (o *Campaign2AllOfRoleCompositionCampaignInfo) GetQueryOk() (*string, bool)`

GetQueryOk returns a tuple with the Query field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuery

`func (o *Campaign2AllOfRoleCompositionCampaignInfo) SetQuery(v string)`

SetQuery sets Query field to given value.

### HasQuery

`func (o *Campaign2AllOfRoleCompositionCampaignInfo) HasQuery() bool`

HasQuery returns a boolean if a field has been set.

### SetQueryNil

`func (o *Campaign2AllOfRoleCompositionCampaignInfo) SetQueryNil(b bool)`

 SetQueryNil sets the value for Query to be an explicit nil

### UnsetQuery
`func (o *Campaign2AllOfRoleCompositionCampaignInfo) UnsetQuery()`

UnsetQuery ensures that no value is present for Query, not even an explicit nil
### GetDescription

`func (o *Campaign2AllOfRoleCompositionCampaignInfo) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Campaign2AllOfRoleCompositionCampaignInfo) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Campaign2AllOfRoleCompositionCampaignInfo) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Campaign2AllOfRoleCompositionCampaignInfo) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *Campaign2AllOfRoleCompositionCampaignInfo) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *Campaign2AllOfRoleCompositionCampaignInfo) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil

