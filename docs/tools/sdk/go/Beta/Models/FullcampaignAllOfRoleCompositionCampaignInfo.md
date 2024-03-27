---
id: fullcampaign-all-of-role-composition-campaign-info
title: FullcampaignAllOfRoleCompositionCampaignInfo
pagination_label: FullcampaignAllOfRoleCompositionCampaignInfo
sidebar_label: FullcampaignAllOfRoleCompositionCampaignInfo
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'FullcampaignAllOfRoleCompositionCampaignInfo'] 
slug: /tools/sdk/go/beta/models/fullcampaign-all-of-role-composition-campaign-info
tags: ['SDK', 'Software Development Kit', 'FullcampaignAllOfRoleCompositionCampaignInfo']
---

# FullcampaignAllOfRoleCompositionCampaignInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Reviewer** |  Pointer to [**FullcampaignAllOfSearchCampaignInfoReviewer**](fullcampaign-all-of-search-campaign-info-reviewer) |  | [optional] 
**RoleIds** |  Pointer to **[]string** | Optional list of roles to include in this campaign. Only one of &#x60;roleIds&#x60; and &#x60;query&#x60; may be set; if neither are set, all roles are included. | [optional] 
**RemediatorRef** |  [**FullcampaignAllOfRoleCompositionCampaignInfoRemediatorRef**](fullcampaign-all-of-role-composition-campaign-info-remediator-ref) |  | 
**Query** |  Pointer to **string** | Optional search query to scope this campaign to a set of roles. Only one of &#x60;roleIds&#x60; and &#x60;query&#x60; may be set; if neither are set, all roles are included. | [optional] 
**Description** |  Pointer to **string** | Describes this role composition campaign. Intended for storing the query used, and possibly the number of roles selected/available. | [optional] 

## Methods

### NewFullcampaignAllOfRoleCompositionCampaignInfo

`func NewFullcampaignAllOfRoleCompositionCampaignInfo(remediatorRef FullcampaignAllOfRoleCompositionCampaignInfoRemediatorRef, ) *FullcampaignAllOfRoleCompositionCampaignInfo`

NewFullcampaignAllOfRoleCompositionCampaignInfo instantiates a new FullcampaignAllOfRoleCompositionCampaignInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFullcampaignAllOfRoleCompositionCampaignInfoWithDefaults

`func NewFullcampaignAllOfRoleCompositionCampaignInfoWithDefaults() *FullcampaignAllOfRoleCompositionCampaignInfo`

NewFullcampaignAllOfRoleCompositionCampaignInfoWithDefaults instantiates a new FullcampaignAllOfRoleCompositionCampaignInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReviewer

`func (o *FullcampaignAllOfRoleCompositionCampaignInfo) GetReviewer() FullcampaignAllOfSearchCampaignInfoReviewer`

GetReviewer returns the Reviewer field if non-nil, zero value otherwise.

### GetReviewerOk

`func (o *FullcampaignAllOfRoleCompositionCampaignInfo) GetReviewerOk() (*FullcampaignAllOfSearchCampaignInfoReviewer, bool)`

GetReviewerOk returns a tuple with the Reviewer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReviewer

`func (o *FullcampaignAllOfRoleCompositionCampaignInfo) SetReviewer(v FullcampaignAllOfSearchCampaignInfoReviewer)`

SetReviewer sets Reviewer field to given value.

### HasReviewer

`func (o *FullcampaignAllOfRoleCompositionCampaignInfo) HasReviewer() bool`

HasReviewer returns a boolean if a field has been set.

### GetRoleIds

`func (o *FullcampaignAllOfRoleCompositionCampaignInfo) GetRoleIds() []string`

GetRoleIds returns the RoleIds field if non-nil, zero value otherwise.

### GetRoleIdsOk

`func (o *FullcampaignAllOfRoleCompositionCampaignInfo) GetRoleIdsOk() (*[]string, bool)`

GetRoleIdsOk returns a tuple with the RoleIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoleIds

`func (o *FullcampaignAllOfRoleCompositionCampaignInfo) SetRoleIds(v []string)`

SetRoleIds sets RoleIds field to given value.

### HasRoleIds

`func (o *FullcampaignAllOfRoleCompositionCampaignInfo) HasRoleIds() bool`

HasRoleIds returns a boolean if a field has been set.

### GetRemediatorRef

`func (o *FullcampaignAllOfRoleCompositionCampaignInfo) GetRemediatorRef() FullcampaignAllOfRoleCompositionCampaignInfoRemediatorRef`

GetRemediatorRef returns the RemediatorRef field if non-nil, zero value otherwise.

### GetRemediatorRefOk

`func (o *FullcampaignAllOfRoleCompositionCampaignInfo) GetRemediatorRefOk() (*FullcampaignAllOfRoleCompositionCampaignInfoRemediatorRef, bool)`

GetRemediatorRefOk returns a tuple with the RemediatorRef field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemediatorRef

`func (o *FullcampaignAllOfRoleCompositionCampaignInfo) SetRemediatorRef(v FullcampaignAllOfRoleCompositionCampaignInfoRemediatorRef)`

SetRemediatorRef sets RemediatorRef field to given value.


### GetQuery

`func (o *FullcampaignAllOfRoleCompositionCampaignInfo) GetQuery() string`

GetQuery returns the Query field if non-nil, zero value otherwise.

### GetQueryOk

`func (o *FullcampaignAllOfRoleCompositionCampaignInfo) GetQueryOk() (*string, bool)`

GetQueryOk returns a tuple with the Query field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuery

`func (o *FullcampaignAllOfRoleCompositionCampaignInfo) SetQuery(v string)`

SetQuery sets Query field to given value.

### HasQuery

`func (o *FullcampaignAllOfRoleCompositionCampaignInfo) HasQuery() bool`

HasQuery returns a boolean if a field has been set.

### GetDescription

`func (o *FullcampaignAllOfRoleCompositionCampaignInfo) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *FullcampaignAllOfRoleCompositionCampaignInfo) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *FullcampaignAllOfRoleCompositionCampaignInfo) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *FullcampaignAllOfRoleCompositionCampaignInfo) HasDescription() bool`

HasDescription returns a boolean if a field has been set.


[[Back to top]](#) 


