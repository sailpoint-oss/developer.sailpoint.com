---
id: campaign-all-of-role-composition-campaign-info
title: CampaignAllOfRoleCompositionCampaignInfo
pagination_label: CampaignAllOfRoleCompositionCampaignInfo
sidebar_label: CampaignAllOfRoleCompositionCampaignInfo
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CampaignAllOfRoleCompositionCampaignInfo', 'CampaignAllOfRoleCompositionCampaignInfo'] 
slug: /tools/sdk/go//models/campaign-all-of-role-composition-campaign-info
tags: ['SDK', 'Software Development Kit', 'CampaignAllOfRoleCompositionCampaignInfo', 'CampaignAllOfRoleCompositionCampaignInfo']
---

# CampaignAllOfRoleCompositionCampaignInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReviewerId** | Pointer to **NullableString** | The ID of the identity or governance group reviewing this campaign. Deprecated in favor of the \"reviewer\" object. | [optional] 
**Reviewer** | Pointer to [**NullableCampaignAllOfRoleCompositionCampaignInfoReviewer**](campaign-all-of-role-composition-campaign-info-reviewer) |  | [optional] 
**RoleIds** | Pointer to **[]string** | Optional list of roles to include in this campaign. Only one of `roleIds` and `query` may be set; if neither are set, all roles are included. | [optional] 
**RemediatorRef** | [**CampaignAllOfRoleCompositionCampaignInfoRemediatorRef**](campaign-all-of-role-composition-campaign-info-remediator-ref) |  | 
**Query** | Pointer to **NullableString** | Optional search query to scope this campaign to a set of roles. Only one of `roleIds` and `query` may be set; if neither are set, all roles are included. | [optional] 
**Description** | Pointer to **NullableString** | Describes this role composition campaign. Intended for storing the query used, and possibly the number of roles selected/available. | [optional] 

## Methods

### NewCampaignAllOfRoleCompositionCampaignInfo

`func NewCampaignAllOfRoleCompositionCampaignInfo(remediatorRef CampaignAllOfRoleCompositionCampaignInfoRemediatorRef, ) *CampaignAllOfRoleCompositionCampaignInfo`

NewCampaignAllOfRoleCompositionCampaignInfo instantiates a new CampaignAllOfRoleCompositionCampaignInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCampaignAllOfRoleCompositionCampaignInfoWithDefaults

`func NewCampaignAllOfRoleCompositionCampaignInfoWithDefaults() *CampaignAllOfRoleCompositionCampaignInfo`

NewCampaignAllOfRoleCompositionCampaignInfoWithDefaults instantiates a new CampaignAllOfRoleCompositionCampaignInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReviewerId

`func (o *CampaignAllOfRoleCompositionCampaignInfo) GetReviewerId() string`

GetReviewerId returns the ReviewerId field if non-nil, zero value otherwise.

### GetReviewerIdOk

`func (o *CampaignAllOfRoleCompositionCampaignInfo) GetReviewerIdOk() (*string, bool)`

GetReviewerIdOk returns a tuple with the ReviewerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReviewerId

`func (o *CampaignAllOfRoleCompositionCampaignInfo) SetReviewerId(v string)`

SetReviewerId sets ReviewerId field to given value.

### HasReviewerId

`func (o *CampaignAllOfRoleCompositionCampaignInfo) HasReviewerId() bool`

HasReviewerId returns a boolean if a field has been set.

### SetReviewerIdNil

`func (o *CampaignAllOfRoleCompositionCampaignInfo) SetReviewerIdNil(b bool)`

 SetReviewerIdNil sets the value for ReviewerId to be an explicit nil

### UnsetReviewerId
`func (o *CampaignAllOfRoleCompositionCampaignInfo) UnsetReviewerId()`

UnsetReviewerId ensures that no value is present for ReviewerId, not even an explicit nil
### GetReviewer

`func (o *CampaignAllOfRoleCompositionCampaignInfo) GetReviewer() CampaignAllOfRoleCompositionCampaignInfoReviewer`

GetReviewer returns the Reviewer field if non-nil, zero value otherwise.

### GetReviewerOk

`func (o *CampaignAllOfRoleCompositionCampaignInfo) GetReviewerOk() (*CampaignAllOfRoleCompositionCampaignInfoReviewer, bool)`

GetReviewerOk returns a tuple with the Reviewer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReviewer

`func (o *CampaignAllOfRoleCompositionCampaignInfo) SetReviewer(v CampaignAllOfRoleCompositionCampaignInfoReviewer)`

SetReviewer sets Reviewer field to given value.

### HasReviewer

`func (o *CampaignAllOfRoleCompositionCampaignInfo) HasReviewer() bool`

HasReviewer returns a boolean if a field has been set.

### SetReviewerNil

`func (o *CampaignAllOfRoleCompositionCampaignInfo) SetReviewerNil(b bool)`

 SetReviewerNil sets the value for Reviewer to be an explicit nil

### UnsetReviewer
`func (o *CampaignAllOfRoleCompositionCampaignInfo) UnsetReviewer()`

UnsetReviewer ensures that no value is present for Reviewer, not even an explicit nil
### GetRoleIds

`func (o *CampaignAllOfRoleCompositionCampaignInfo) GetRoleIds() []string`

GetRoleIds returns the RoleIds field if non-nil, zero value otherwise.

### GetRoleIdsOk

`func (o *CampaignAllOfRoleCompositionCampaignInfo) GetRoleIdsOk() (*[]string, bool)`

GetRoleIdsOk returns a tuple with the RoleIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoleIds

`func (o *CampaignAllOfRoleCompositionCampaignInfo) SetRoleIds(v []string)`

SetRoleIds sets RoleIds field to given value.

### HasRoleIds

`func (o *CampaignAllOfRoleCompositionCampaignInfo) HasRoleIds() bool`

HasRoleIds returns a boolean if a field has been set.

### GetRemediatorRef

`func (o *CampaignAllOfRoleCompositionCampaignInfo) GetRemediatorRef() CampaignAllOfRoleCompositionCampaignInfoRemediatorRef`

GetRemediatorRef returns the RemediatorRef field if non-nil, zero value otherwise.

### GetRemediatorRefOk

`func (o *CampaignAllOfRoleCompositionCampaignInfo) GetRemediatorRefOk() (*CampaignAllOfRoleCompositionCampaignInfoRemediatorRef, bool)`

GetRemediatorRefOk returns a tuple with the RemediatorRef field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemediatorRef

`func (o *CampaignAllOfRoleCompositionCampaignInfo) SetRemediatorRef(v CampaignAllOfRoleCompositionCampaignInfoRemediatorRef)`

SetRemediatorRef sets RemediatorRef field to given value.


### GetQuery

`func (o *CampaignAllOfRoleCompositionCampaignInfo) GetQuery() string`

GetQuery returns the Query field if non-nil, zero value otherwise.

### GetQueryOk

`func (o *CampaignAllOfRoleCompositionCampaignInfo) GetQueryOk() (*string, bool)`

GetQueryOk returns a tuple with the Query field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuery

`func (o *CampaignAllOfRoleCompositionCampaignInfo) SetQuery(v string)`

SetQuery sets Query field to given value.

### HasQuery

`func (o *CampaignAllOfRoleCompositionCampaignInfo) HasQuery() bool`

HasQuery returns a boolean if a field has been set.

### SetQueryNil

`func (o *CampaignAllOfRoleCompositionCampaignInfo) SetQueryNil(b bool)`

 SetQueryNil sets the value for Query to be an explicit nil

### UnsetQuery
`func (o *CampaignAllOfRoleCompositionCampaignInfo) UnsetQuery()`

UnsetQuery ensures that no value is present for Query, not even an explicit nil
### GetDescription

`func (o *CampaignAllOfRoleCompositionCampaignInfo) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CampaignAllOfRoleCompositionCampaignInfo) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CampaignAllOfRoleCompositionCampaignInfo) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *CampaignAllOfRoleCompositionCampaignInfo) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *CampaignAllOfRoleCompositionCampaignInfo) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *CampaignAllOfRoleCompositionCampaignInfo) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil

