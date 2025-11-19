---
id: get-campaign200-response
title: GetCampaign200Response
pagination_label: GetCampaign200Response
sidebar_label: GetCampaign200Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetCampaign200Response', 'GetCampaign200Response'] 
slug: /tools/sdk/go/v3/models/get-campaign200-response
tags: ['SDK', 'Software Development Kit', 'GetCampaign200Response', 'GetCampaign200Response']
---

# GetCampaign200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Id of the campaign | [optional] [readonly] 
**Name** | **string** | The campaign name. If this object is part of a template, special formatting applies; see the `/campaign-templates/{id}/generate` endpoint documentation for details.  | 
**Description** | **NullableString** | The campaign description. If this object is part of a template, special formatting applies; see the `/campaign-templates/{id}/generate` endpoint documentation for details.  | 
**Deadline** | Pointer to **SailPointTime** | The campaign's completion deadline.  This date must be in the future in order to activate the campaign.  If you try to activate a campaign with a deadline of today or in the past, you will receive a 400 error response. | [optional] 
**Type** | **string** | The type of campaign. Could be extended in the future. | 
**EmailNotificationEnabled** | Pointer to **bool** | Enables email notification for this campaign | [optional] [default to false]
**AutoRevokeAllowed** | Pointer to **bool** | Allows auto revoke for this campaign | [optional] [default to false]
**RecommendationsEnabled** | Pointer to **bool** | Enables IAI for this campaign. Accepts true even if the IAI product feature is off. If IAI is turned off then campaigns generated from this template will indicate false. The real value will then be returned if IAI is ever enabled for the org in the future. | [optional] [default to false]
**Status** | Pointer to **string** | The campaign's current status. | [optional] [readonly] 
**CorrelatedStatus** | Pointer to **string** | The correlatedStatus of the campaign. Only SOURCE_OWNER campaigns can be Uncorrelated. An Uncorrelated certification campaign only includes Uncorrelated identities (An identity is uncorrelated if it has no accounts on an authoritative source). | [optional] 
**Created** | Pointer to **SailPointTime** | Created time of the campaign | [optional] [readonly] 
**TotalCertifications** | Pointer to **int32** | The total number of certifications in this campaign. | [optional] [readonly] 
**CompletedCertifications** | Pointer to **int32** | The number of completed certifications in this campaign. | [optional] [readonly] 
**Alerts** | Pointer to [**[]CampaignAlert**](campaign-alert) | A list of errors and warnings that have accumulated. | [optional] [readonly] 
**Modified** | Pointer to **SailPointTime** | Modified time of the campaign | [optional] [readonly] 
**Filter** | Pointer to [**CampaignAllOfFilter**](campaign-all-of-filter) |  | [optional] 
**SunsetCommentsRequired** | Pointer to **bool** | Determines if comments on sunset date changes are required. | [optional] [default to true]
**SourceOwnerCampaignInfo** | Pointer to [**CampaignAllOfSourceOwnerCampaignInfo**](campaign-all-of-source-owner-campaign-info) |  | [optional] 
**SearchCampaignInfo** | Pointer to [**CampaignAllOfSearchCampaignInfo**](campaign-all-of-search-campaign-info) |  | [optional] 
**RoleCompositionCampaignInfo** | Pointer to [**CampaignAllOfRoleCompositionCampaignInfo**](campaign-all-of-role-composition-campaign-info) |  | [optional] 
**MachineAccountCampaignInfo** | Pointer to [**CampaignAllOfMachineAccountCampaignInfo**](campaign-all-of-machine-account-campaign-info) |  | [optional] 
**SourcesWithOrphanEntitlements** | Pointer to [**[]CampaignAllOfSourcesWithOrphanEntitlements**](campaign-all-of-sources-with-orphan-entitlements) | A list of sources in the campaign that contain \\\"orphan entitlements\\\" (entitlements without a corresponding Managed Attribute). An empty list indicates the campaign has no orphan entitlements. Null indicates there may be unknown orphan entitlements in the campaign (the campaign was created before this feature was implemented). | [optional] [readonly] 
**MandatoryCommentRequirement** | Pointer to **string** | Determines whether comments are required for decisions during certification reviews. You can require comments for all decisions, revoke-only decisions, or no decisions. By default, comments are not required for decisions. | [optional] 

## Methods

### NewGetCampaign200Response

`func NewGetCampaign200Response(name string, description NullableString, type_ string, ) *GetCampaign200Response`

NewGetCampaign200Response instantiates a new GetCampaign200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetCampaign200ResponseWithDefaults

`func NewGetCampaign200ResponseWithDefaults() *GetCampaign200Response`

NewGetCampaign200ResponseWithDefaults instantiates a new GetCampaign200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *GetCampaign200Response) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *GetCampaign200Response) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *GetCampaign200Response) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *GetCampaign200Response) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *GetCampaign200Response) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *GetCampaign200Response) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *GetCampaign200Response) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *GetCampaign200Response) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *GetCampaign200Response) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *GetCampaign200Response) SetDescription(v string)`

SetDescription sets Description field to given value.


### SetDescriptionNil

`func (o *GetCampaign200Response) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *GetCampaign200Response) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetDeadline

`func (o *GetCampaign200Response) GetDeadline() SailPointTime`

GetDeadline returns the Deadline field if non-nil, zero value otherwise.

### GetDeadlineOk

`func (o *GetCampaign200Response) GetDeadlineOk() (*SailPointTime, bool)`

GetDeadlineOk returns a tuple with the Deadline field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeadline

`func (o *GetCampaign200Response) SetDeadline(v SailPointTime)`

SetDeadline sets Deadline field to given value.

### HasDeadline

`func (o *GetCampaign200Response) HasDeadline() bool`

HasDeadline returns a boolean if a field has been set.

### GetType

`func (o *GetCampaign200Response) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *GetCampaign200Response) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *GetCampaign200Response) SetType(v string)`

SetType sets Type field to given value.


### GetEmailNotificationEnabled

`func (o *GetCampaign200Response) GetEmailNotificationEnabled() bool`

GetEmailNotificationEnabled returns the EmailNotificationEnabled field if non-nil, zero value otherwise.

### GetEmailNotificationEnabledOk

`func (o *GetCampaign200Response) GetEmailNotificationEnabledOk() (*bool, bool)`

GetEmailNotificationEnabledOk returns a tuple with the EmailNotificationEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailNotificationEnabled

`func (o *GetCampaign200Response) SetEmailNotificationEnabled(v bool)`

SetEmailNotificationEnabled sets EmailNotificationEnabled field to given value.

### HasEmailNotificationEnabled

`func (o *GetCampaign200Response) HasEmailNotificationEnabled() bool`

HasEmailNotificationEnabled returns a boolean if a field has been set.

### GetAutoRevokeAllowed

`func (o *GetCampaign200Response) GetAutoRevokeAllowed() bool`

GetAutoRevokeAllowed returns the AutoRevokeAllowed field if non-nil, zero value otherwise.

### GetAutoRevokeAllowedOk

`func (o *GetCampaign200Response) GetAutoRevokeAllowedOk() (*bool, bool)`

GetAutoRevokeAllowedOk returns a tuple with the AutoRevokeAllowed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoRevokeAllowed

`func (o *GetCampaign200Response) SetAutoRevokeAllowed(v bool)`

SetAutoRevokeAllowed sets AutoRevokeAllowed field to given value.

### HasAutoRevokeAllowed

`func (o *GetCampaign200Response) HasAutoRevokeAllowed() bool`

HasAutoRevokeAllowed returns a boolean if a field has been set.

### GetRecommendationsEnabled

`func (o *GetCampaign200Response) GetRecommendationsEnabled() bool`

GetRecommendationsEnabled returns the RecommendationsEnabled field if non-nil, zero value otherwise.

### GetRecommendationsEnabledOk

`func (o *GetCampaign200Response) GetRecommendationsEnabledOk() (*bool, bool)`

GetRecommendationsEnabledOk returns a tuple with the RecommendationsEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecommendationsEnabled

`func (o *GetCampaign200Response) SetRecommendationsEnabled(v bool)`

SetRecommendationsEnabled sets RecommendationsEnabled field to given value.

### HasRecommendationsEnabled

`func (o *GetCampaign200Response) HasRecommendationsEnabled() bool`

HasRecommendationsEnabled returns a boolean if a field has been set.

### GetStatus

`func (o *GetCampaign200Response) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *GetCampaign200Response) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *GetCampaign200Response) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *GetCampaign200Response) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetCorrelatedStatus

`func (o *GetCampaign200Response) GetCorrelatedStatus() string`

GetCorrelatedStatus returns the CorrelatedStatus field if non-nil, zero value otherwise.

### GetCorrelatedStatusOk

`func (o *GetCampaign200Response) GetCorrelatedStatusOk() (*string, bool)`

GetCorrelatedStatusOk returns a tuple with the CorrelatedStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCorrelatedStatus

`func (o *GetCampaign200Response) SetCorrelatedStatus(v string)`

SetCorrelatedStatus sets CorrelatedStatus field to given value.

### HasCorrelatedStatus

`func (o *GetCampaign200Response) HasCorrelatedStatus() bool`

HasCorrelatedStatus returns a boolean if a field has been set.

### GetCreated

`func (o *GetCampaign200Response) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *GetCampaign200Response) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *GetCampaign200Response) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *GetCampaign200Response) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetTotalCertifications

`func (o *GetCampaign200Response) GetTotalCertifications() int32`

GetTotalCertifications returns the TotalCertifications field if non-nil, zero value otherwise.

### GetTotalCertificationsOk

`func (o *GetCampaign200Response) GetTotalCertificationsOk() (*int32, bool)`

GetTotalCertificationsOk returns a tuple with the TotalCertifications field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalCertifications

`func (o *GetCampaign200Response) SetTotalCertifications(v int32)`

SetTotalCertifications sets TotalCertifications field to given value.

### HasTotalCertifications

`func (o *GetCampaign200Response) HasTotalCertifications() bool`

HasTotalCertifications returns a boolean if a field has been set.

### GetCompletedCertifications

`func (o *GetCampaign200Response) GetCompletedCertifications() int32`

GetCompletedCertifications returns the CompletedCertifications field if non-nil, zero value otherwise.

### GetCompletedCertificationsOk

`func (o *GetCampaign200Response) GetCompletedCertificationsOk() (*int32, bool)`

GetCompletedCertificationsOk returns a tuple with the CompletedCertifications field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompletedCertifications

`func (o *GetCampaign200Response) SetCompletedCertifications(v int32)`

SetCompletedCertifications sets CompletedCertifications field to given value.

### HasCompletedCertifications

`func (o *GetCampaign200Response) HasCompletedCertifications() bool`

HasCompletedCertifications returns a boolean if a field has been set.

### GetAlerts

`func (o *GetCampaign200Response) GetAlerts() []CampaignAlert`

GetAlerts returns the Alerts field if non-nil, zero value otherwise.

### GetAlertsOk

`func (o *GetCampaign200Response) GetAlertsOk() (*[]CampaignAlert, bool)`

GetAlertsOk returns a tuple with the Alerts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlerts

`func (o *GetCampaign200Response) SetAlerts(v []CampaignAlert)`

SetAlerts sets Alerts field to given value.

### HasAlerts

`func (o *GetCampaign200Response) HasAlerts() bool`

HasAlerts returns a boolean if a field has been set.

### GetModified

`func (o *GetCampaign200Response) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *GetCampaign200Response) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *GetCampaign200Response) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *GetCampaign200Response) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetFilter

`func (o *GetCampaign200Response) GetFilter() CampaignAllOfFilter`

GetFilter returns the Filter field if non-nil, zero value otherwise.

### GetFilterOk

`func (o *GetCampaign200Response) GetFilterOk() (*CampaignAllOfFilter, bool)`

GetFilterOk returns a tuple with the Filter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilter

`func (o *GetCampaign200Response) SetFilter(v CampaignAllOfFilter)`

SetFilter sets Filter field to given value.

### HasFilter

`func (o *GetCampaign200Response) HasFilter() bool`

HasFilter returns a boolean if a field has been set.

### GetSunsetCommentsRequired

`func (o *GetCampaign200Response) GetSunsetCommentsRequired() bool`

GetSunsetCommentsRequired returns the SunsetCommentsRequired field if non-nil, zero value otherwise.

### GetSunsetCommentsRequiredOk

`func (o *GetCampaign200Response) GetSunsetCommentsRequiredOk() (*bool, bool)`

GetSunsetCommentsRequiredOk returns a tuple with the SunsetCommentsRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSunsetCommentsRequired

`func (o *GetCampaign200Response) SetSunsetCommentsRequired(v bool)`

SetSunsetCommentsRequired sets SunsetCommentsRequired field to given value.

### HasSunsetCommentsRequired

`func (o *GetCampaign200Response) HasSunsetCommentsRequired() bool`

HasSunsetCommentsRequired returns a boolean if a field has been set.

### GetSourceOwnerCampaignInfo

`func (o *GetCampaign200Response) GetSourceOwnerCampaignInfo() CampaignAllOfSourceOwnerCampaignInfo`

GetSourceOwnerCampaignInfo returns the SourceOwnerCampaignInfo field if non-nil, zero value otherwise.

### GetSourceOwnerCampaignInfoOk

`func (o *GetCampaign200Response) GetSourceOwnerCampaignInfoOk() (*CampaignAllOfSourceOwnerCampaignInfo, bool)`

GetSourceOwnerCampaignInfoOk returns a tuple with the SourceOwnerCampaignInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceOwnerCampaignInfo

`func (o *GetCampaign200Response) SetSourceOwnerCampaignInfo(v CampaignAllOfSourceOwnerCampaignInfo)`

SetSourceOwnerCampaignInfo sets SourceOwnerCampaignInfo field to given value.

### HasSourceOwnerCampaignInfo

`func (o *GetCampaign200Response) HasSourceOwnerCampaignInfo() bool`

HasSourceOwnerCampaignInfo returns a boolean if a field has been set.

### GetSearchCampaignInfo

`func (o *GetCampaign200Response) GetSearchCampaignInfo() CampaignAllOfSearchCampaignInfo`

GetSearchCampaignInfo returns the SearchCampaignInfo field if non-nil, zero value otherwise.

### GetSearchCampaignInfoOk

`func (o *GetCampaign200Response) GetSearchCampaignInfoOk() (*CampaignAllOfSearchCampaignInfo, bool)`

GetSearchCampaignInfoOk returns a tuple with the SearchCampaignInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSearchCampaignInfo

`func (o *GetCampaign200Response) SetSearchCampaignInfo(v CampaignAllOfSearchCampaignInfo)`

SetSearchCampaignInfo sets SearchCampaignInfo field to given value.

### HasSearchCampaignInfo

`func (o *GetCampaign200Response) HasSearchCampaignInfo() bool`

HasSearchCampaignInfo returns a boolean if a field has been set.

### GetRoleCompositionCampaignInfo

`func (o *GetCampaign200Response) GetRoleCompositionCampaignInfo() CampaignAllOfRoleCompositionCampaignInfo`

GetRoleCompositionCampaignInfo returns the RoleCompositionCampaignInfo field if non-nil, zero value otherwise.

### GetRoleCompositionCampaignInfoOk

`func (o *GetCampaign200Response) GetRoleCompositionCampaignInfoOk() (*CampaignAllOfRoleCompositionCampaignInfo, bool)`

GetRoleCompositionCampaignInfoOk returns a tuple with the RoleCompositionCampaignInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoleCompositionCampaignInfo

`func (o *GetCampaign200Response) SetRoleCompositionCampaignInfo(v CampaignAllOfRoleCompositionCampaignInfo)`

SetRoleCompositionCampaignInfo sets RoleCompositionCampaignInfo field to given value.

### HasRoleCompositionCampaignInfo

`func (o *GetCampaign200Response) HasRoleCompositionCampaignInfo() bool`

HasRoleCompositionCampaignInfo returns a boolean if a field has been set.

### GetMachineAccountCampaignInfo

`func (o *GetCampaign200Response) GetMachineAccountCampaignInfo() CampaignAllOfMachineAccountCampaignInfo`

GetMachineAccountCampaignInfo returns the MachineAccountCampaignInfo field if non-nil, zero value otherwise.

### GetMachineAccountCampaignInfoOk

`func (o *GetCampaign200Response) GetMachineAccountCampaignInfoOk() (*CampaignAllOfMachineAccountCampaignInfo, bool)`

GetMachineAccountCampaignInfoOk returns a tuple with the MachineAccountCampaignInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMachineAccountCampaignInfo

`func (o *GetCampaign200Response) SetMachineAccountCampaignInfo(v CampaignAllOfMachineAccountCampaignInfo)`

SetMachineAccountCampaignInfo sets MachineAccountCampaignInfo field to given value.

### HasMachineAccountCampaignInfo

`func (o *GetCampaign200Response) HasMachineAccountCampaignInfo() bool`

HasMachineAccountCampaignInfo returns a boolean if a field has been set.

### GetSourcesWithOrphanEntitlements

`func (o *GetCampaign200Response) GetSourcesWithOrphanEntitlements() []CampaignAllOfSourcesWithOrphanEntitlements`

GetSourcesWithOrphanEntitlements returns the SourcesWithOrphanEntitlements field if non-nil, zero value otherwise.

### GetSourcesWithOrphanEntitlementsOk

`func (o *GetCampaign200Response) GetSourcesWithOrphanEntitlementsOk() (*[]CampaignAllOfSourcesWithOrphanEntitlements, bool)`

GetSourcesWithOrphanEntitlementsOk returns a tuple with the SourcesWithOrphanEntitlements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourcesWithOrphanEntitlements

`func (o *GetCampaign200Response) SetSourcesWithOrphanEntitlements(v []CampaignAllOfSourcesWithOrphanEntitlements)`

SetSourcesWithOrphanEntitlements sets SourcesWithOrphanEntitlements field to given value.

### HasSourcesWithOrphanEntitlements

`func (o *GetCampaign200Response) HasSourcesWithOrphanEntitlements() bool`

HasSourcesWithOrphanEntitlements returns a boolean if a field has been set.

### GetMandatoryCommentRequirement

`func (o *GetCampaign200Response) GetMandatoryCommentRequirement() string`

GetMandatoryCommentRequirement returns the MandatoryCommentRequirement field if non-nil, zero value otherwise.

### GetMandatoryCommentRequirementOk

`func (o *GetCampaign200Response) GetMandatoryCommentRequirementOk() (*string, bool)`

GetMandatoryCommentRequirementOk returns a tuple with the MandatoryCommentRequirement field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMandatoryCommentRequirement

`func (o *GetCampaign200Response) SetMandatoryCommentRequirement(v string)`

SetMandatoryCommentRequirement sets MandatoryCommentRequirement field to given value.

### HasMandatoryCommentRequirement

`func (o *GetCampaign200Response) HasMandatoryCommentRequirement() bool`

HasMandatoryCommentRequirement returns a boolean if a field has been set.


