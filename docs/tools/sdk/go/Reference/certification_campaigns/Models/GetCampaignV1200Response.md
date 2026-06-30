---
id: v1-get-campaign-v1200-response
title: GetCampaignV1200Response
pagination_label: GetCampaignV1200Response
sidebar_label: GetCampaignV1200Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetCampaignV1200Response', 'V1GetCampaignV1200Response'] 
slug: /tools/sdk/go/certificationcampaigns/models/get-campaign-v1200-response
tags: ['SDK', 'Software Development Kit', 'GetCampaignV1200Response', 'V1GetCampaignV1200Response']
---

# GetCampaignV1200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **NullableString** | Id of the campaign | [optional] [readonly] 
**Name** | **string** | The campaign name. If this object is part of a template, special formatting applies; see the `/campaign-templates/{id}/generate` endpoint documentation for details.  | 
**Description** | **NullableString** | The campaign description. If this object is part of a template, special formatting applies; see the `/campaign-templates/{id}/generate` endpoint documentation for details.  | 
**Deadline** | Pointer to **NullableTime** | The campaign's completion deadline.  This date must be in the future in order to activate the campaign.  If you try to activate a campaign with a deadline of today or in the past, you will receive a 400 error response. | [optional] 
**Type** | **string** | The type of campaign. Could be extended in the future. | 
**EmailNotificationEnabled** | Pointer to **bool** | Enables email notification for this campaign | [optional] [default to false]
**AutoRevokeAllowed** | Pointer to **bool** | Allows auto revoke for this campaign | [optional] [default to false]
**RecommendationsEnabled** | Pointer to **bool** | Enables IAI for this campaign. Accepts true even if the IAI product feature is off. If IAI is turned off then campaigns generated from this template will indicate false. The real value will then be returned if IAI is ever enabled for the org in the future. | [optional] [default to false]
**Status** | Pointer to **NullableString** | The campaign's current status. | [optional] [readonly] 
**CorrelatedStatus** | Pointer to **string** | The correlatedStatus of the campaign. Only SOURCE_OWNER campaigns can be Uncorrelated. An Uncorrelated certification campaign only includes Uncorrelated identities (An identity is uncorrelated if it has no accounts on an authoritative source). | [optional] 
**Created** | Pointer to **NullableTime** | Created time of the campaign | [optional] [readonly] 
**TotalCertifications** | Pointer to **NullableInt32** | The total number of certifications in this campaign. | [optional] [readonly] 
**CompletedCertifications** | Pointer to **NullableInt32** | The number of completed certifications in this campaign. | [optional] [readonly] 
**Alerts** | Pointer to [**[]Campaignalert**](campaignalert) | A list of errors and warnings that have accumulated. | [optional] [readonly] 
**Modified** | Pointer to **NullableTime** | Modified time of the campaign | [optional] [readonly] 
**Filter** | Pointer to [**NullableCampaign2AllOfFilter**](campaign2-all-of-filter) |  | [optional] 
**SunsetCommentsRequired** | Pointer to **bool** | Determines if comments on sunset date changes are required. | [optional] [default to true]
**SourceOwnerCampaignInfo** | Pointer to [**NullableCampaign2AllOfSourceOwnerCampaignInfo**](campaign2-all-of-source-owner-campaign-info) |  | [optional] 
**SearchCampaignInfo** | Pointer to [**NullableCampaign2AllOfSearchCampaignInfo**](campaign2-all-of-search-campaign-info) |  | [optional] 
**RoleCompositionCampaignInfo** | Pointer to [**NullableCampaign2AllOfRoleCompositionCampaignInfo**](campaign2-all-of-role-composition-campaign-info) |  | [optional] 
**MachineAccountCampaignInfo** | Pointer to [**NullableCampaign2AllOfMachineAccountCampaignInfo**](campaign2-all-of-machine-account-campaign-info) |  | [optional] 
**SourcesWithOrphanEntitlements** | Pointer to [**[]Campaign2AllOfSourcesWithOrphanEntitlements**](campaign2-all-of-sources-with-orphan-entitlements) | A list of sources in the campaign that contain \\\"orphan entitlements\\\" (entitlements without a corresponding Managed Attribute). An empty list indicates the campaign has no orphan entitlements. Null indicates there may be unknown orphan entitlements in the campaign (the campaign was created before this feature was implemented). | [optional] [readonly] 
**MandatoryCommentRequirement** | Pointer to **string** | Determines whether comments are required for decisions during certification reviews. You can require comments for all decisions, revoke-only decisions, or no decisions. By default, comments are not required for decisions. | [optional] 

## Methods

### NewGetCampaignV1200Response

`func NewGetCampaignV1200Response(name string, description NullableString, type_ string, ) *GetCampaignV1200Response`

NewGetCampaignV1200Response instantiates a new GetCampaignV1200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetCampaignV1200ResponseWithDefaults

`func NewGetCampaignV1200ResponseWithDefaults() *GetCampaignV1200Response`

NewGetCampaignV1200ResponseWithDefaults instantiates a new GetCampaignV1200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *GetCampaignV1200Response) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *GetCampaignV1200Response) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *GetCampaignV1200Response) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *GetCampaignV1200Response) HasId() bool`

HasId returns a boolean if a field has been set.

### SetIdNil

`func (o *GetCampaignV1200Response) SetIdNil(b bool)`

 SetIdNil sets the value for Id to be an explicit nil

### UnsetId
`func (o *GetCampaignV1200Response) UnsetId()`

UnsetId ensures that no value is present for Id, not even an explicit nil
### GetName

`func (o *GetCampaignV1200Response) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *GetCampaignV1200Response) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *GetCampaignV1200Response) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *GetCampaignV1200Response) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *GetCampaignV1200Response) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *GetCampaignV1200Response) SetDescription(v string)`

SetDescription sets Description field to given value.


### SetDescriptionNil

`func (o *GetCampaignV1200Response) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *GetCampaignV1200Response) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetDeadline

`func (o *GetCampaignV1200Response) GetDeadline() SailPointTime`

GetDeadline returns the Deadline field if non-nil, zero value otherwise.

### GetDeadlineOk

`func (o *GetCampaignV1200Response) GetDeadlineOk() (*SailPointTime, bool)`

GetDeadlineOk returns a tuple with the Deadline field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeadline

`func (o *GetCampaignV1200Response) SetDeadline(v SailPointTime)`

SetDeadline sets Deadline field to given value.

### HasDeadline

`func (o *GetCampaignV1200Response) HasDeadline() bool`

HasDeadline returns a boolean if a field has been set.

### SetDeadlineNil

`func (o *GetCampaignV1200Response) SetDeadlineNil(b bool)`

 SetDeadlineNil sets the value for Deadline to be an explicit nil

### UnsetDeadline
`func (o *GetCampaignV1200Response) UnsetDeadline()`

UnsetDeadline ensures that no value is present for Deadline, not even an explicit nil
### GetType

`func (o *GetCampaignV1200Response) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *GetCampaignV1200Response) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *GetCampaignV1200Response) SetType(v string)`

SetType sets Type field to given value.


### GetEmailNotificationEnabled

`func (o *GetCampaignV1200Response) GetEmailNotificationEnabled() bool`

GetEmailNotificationEnabled returns the EmailNotificationEnabled field if non-nil, zero value otherwise.

### GetEmailNotificationEnabledOk

`func (o *GetCampaignV1200Response) GetEmailNotificationEnabledOk() (*bool, bool)`

GetEmailNotificationEnabledOk returns a tuple with the EmailNotificationEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailNotificationEnabled

`func (o *GetCampaignV1200Response) SetEmailNotificationEnabled(v bool)`

SetEmailNotificationEnabled sets EmailNotificationEnabled field to given value.

### HasEmailNotificationEnabled

`func (o *GetCampaignV1200Response) HasEmailNotificationEnabled() bool`

HasEmailNotificationEnabled returns a boolean if a field has been set.

### GetAutoRevokeAllowed

`func (o *GetCampaignV1200Response) GetAutoRevokeAllowed() bool`

GetAutoRevokeAllowed returns the AutoRevokeAllowed field if non-nil, zero value otherwise.

### GetAutoRevokeAllowedOk

`func (o *GetCampaignV1200Response) GetAutoRevokeAllowedOk() (*bool, bool)`

GetAutoRevokeAllowedOk returns a tuple with the AutoRevokeAllowed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoRevokeAllowed

`func (o *GetCampaignV1200Response) SetAutoRevokeAllowed(v bool)`

SetAutoRevokeAllowed sets AutoRevokeAllowed field to given value.

### HasAutoRevokeAllowed

`func (o *GetCampaignV1200Response) HasAutoRevokeAllowed() bool`

HasAutoRevokeAllowed returns a boolean if a field has been set.

### GetRecommendationsEnabled

`func (o *GetCampaignV1200Response) GetRecommendationsEnabled() bool`

GetRecommendationsEnabled returns the RecommendationsEnabled field if non-nil, zero value otherwise.

### GetRecommendationsEnabledOk

`func (o *GetCampaignV1200Response) GetRecommendationsEnabledOk() (*bool, bool)`

GetRecommendationsEnabledOk returns a tuple with the RecommendationsEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecommendationsEnabled

`func (o *GetCampaignV1200Response) SetRecommendationsEnabled(v bool)`

SetRecommendationsEnabled sets RecommendationsEnabled field to given value.

### HasRecommendationsEnabled

`func (o *GetCampaignV1200Response) HasRecommendationsEnabled() bool`

HasRecommendationsEnabled returns a boolean if a field has been set.

### GetStatus

`func (o *GetCampaignV1200Response) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *GetCampaignV1200Response) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *GetCampaignV1200Response) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *GetCampaignV1200Response) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### SetStatusNil

`func (o *GetCampaignV1200Response) SetStatusNil(b bool)`

 SetStatusNil sets the value for Status to be an explicit nil

### UnsetStatus
`func (o *GetCampaignV1200Response) UnsetStatus()`

UnsetStatus ensures that no value is present for Status, not even an explicit nil
### GetCorrelatedStatus

`func (o *GetCampaignV1200Response) GetCorrelatedStatus() string`

GetCorrelatedStatus returns the CorrelatedStatus field if non-nil, zero value otherwise.

### GetCorrelatedStatusOk

`func (o *GetCampaignV1200Response) GetCorrelatedStatusOk() (*string, bool)`

GetCorrelatedStatusOk returns a tuple with the CorrelatedStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCorrelatedStatus

`func (o *GetCampaignV1200Response) SetCorrelatedStatus(v string)`

SetCorrelatedStatus sets CorrelatedStatus field to given value.

### HasCorrelatedStatus

`func (o *GetCampaignV1200Response) HasCorrelatedStatus() bool`

HasCorrelatedStatus returns a boolean if a field has been set.

### GetCreated

`func (o *GetCampaignV1200Response) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *GetCampaignV1200Response) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *GetCampaignV1200Response) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *GetCampaignV1200Response) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### SetCreatedNil

`func (o *GetCampaignV1200Response) SetCreatedNil(b bool)`

 SetCreatedNil sets the value for Created to be an explicit nil

### UnsetCreated
`func (o *GetCampaignV1200Response) UnsetCreated()`

UnsetCreated ensures that no value is present for Created, not even an explicit nil
### GetTotalCertifications

`func (o *GetCampaignV1200Response) GetTotalCertifications() int32`

GetTotalCertifications returns the TotalCertifications field if non-nil, zero value otherwise.

### GetTotalCertificationsOk

`func (o *GetCampaignV1200Response) GetTotalCertificationsOk() (*int32, bool)`

GetTotalCertificationsOk returns a tuple with the TotalCertifications field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalCertifications

`func (o *GetCampaignV1200Response) SetTotalCertifications(v int32)`

SetTotalCertifications sets TotalCertifications field to given value.

### HasTotalCertifications

`func (o *GetCampaignV1200Response) HasTotalCertifications() bool`

HasTotalCertifications returns a boolean if a field has been set.

### SetTotalCertificationsNil

`func (o *GetCampaignV1200Response) SetTotalCertificationsNil(b bool)`

 SetTotalCertificationsNil sets the value for TotalCertifications to be an explicit nil

### UnsetTotalCertifications
`func (o *GetCampaignV1200Response) UnsetTotalCertifications()`

UnsetTotalCertifications ensures that no value is present for TotalCertifications, not even an explicit nil
### GetCompletedCertifications

`func (o *GetCampaignV1200Response) GetCompletedCertifications() int32`

GetCompletedCertifications returns the CompletedCertifications field if non-nil, zero value otherwise.

### GetCompletedCertificationsOk

`func (o *GetCampaignV1200Response) GetCompletedCertificationsOk() (*int32, bool)`

GetCompletedCertificationsOk returns a tuple with the CompletedCertifications field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompletedCertifications

`func (o *GetCampaignV1200Response) SetCompletedCertifications(v int32)`

SetCompletedCertifications sets CompletedCertifications field to given value.

### HasCompletedCertifications

`func (o *GetCampaignV1200Response) HasCompletedCertifications() bool`

HasCompletedCertifications returns a boolean if a field has been set.

### SetCompletedCertificationsNil

`func (o *GetCampaignV1200Response) SetCompletedCertificationsNil(b bool)`

 SetCompletedCertificationsNil sets the value for CompletedCertifications to be an explicit nil

### UnsetCompletedCertifications
`func (o *GetCampaignV1200Response) UnsetCompletedCertifications()`

UnsetCompletedCertifications ensures that no value is present for CompletedCertifications, not even an explicit nil
### GetAlerts

`func (o *GetCampaignV1200Response) GetAlerts() []Campaignalert`

GetAlerts returns the Alerts field if non-nil, zero value otherwise.

### GetAlertsOk

`func (o *GetCampaignV1200Response) GetAlertsOk() (*[]Campaignalert, bool)`

GetAlertsOk returns a tuple with the Alerts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlerts

`func (o *GetCampaignV1200Response) SetAlerts(v []Campaignalert)`

SetAlerts sets Alerts field to given value.

### HasAlerts

`func (o *GetCampaignV1200Response) HasAlerts() bool`

HasAlerts returns a boolean if a field has been set.

### SetAlertsNil

`func (o *GetCampaignV1200Response) SetAlertsNil(b bool)`

 SetAlertsNil sets the value for Alerts to be an explicit nil

### UnsetAlerts
`func (o *GetCampaignV1200Response) UnsetAlerts()`

UnsetAlerts ensures that no value is present for Alerts, not even an explicit nil
### GetModified

`func (o *GetCampaignV1200Response) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *GetCampaignV1200Response) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *GetCampaignV1200Response) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *GetCampaignV1200Response) HasModified() bool`

HasModified returns a boolean if a field has been set.

### SetModifiedNil

`func (o *GetCampaignV1200Response) SetModifiedNil(b bool)`

 SetModifiedNil sets the value for Modified to be an explicit nil

### UnsetModified
`func (o *GetCampaignV1200Response) UnsetModified()`

UnsetModified ensures that no value is present for Modified, not even an explicit nil
### GetFilter

`func (o *GetCampaignV1200Response) GetFilter() Campaign2AllOfFilter`

GetFilter returns the Filter field if non-nil, zero value otherwise.

### GetFilterOk

`func (o *GetCampaignV1200Response) GetFilterOk() (*Campaign2AllOfFilter, bool)`

GetFilterOk returns a tuple with the Filter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilter

`func (o *GetCampaignV1200Response) SetFilter(v Campaign2AllOfFilter)`

SetFilter sets Filter field to given value.

### HasFilter

`func (o *GetCampaignV1200Response) HasFilter() bool`

HasFilter returns a boolean if a field has been set.

### SetFilterNil

`func (o *GetCampaignV1200Response) SetFilterNil(b bool)`

 SetFilterNil sets the value for Filter to be an explicit nil

### UnsetFilter
`func (o *GetCampaignV1200Response) UnsetFilter()`

UnsetFilter ensures that no value is present for Filter, not even an explicit nil
### GetSunsetCommentsRequired

`func (o *GetCampaignV1200Response) GetSunsetCommentsRequired() bool`

GetSunsetCommentsRequired returns the SunsetCommentsRequired field if non-nil, zero value otherwise.

### GetSunsetCommentsRequiredOk

`func (o *GetCampaignV1200Response) GetSunsetCommentsRequiredOk() (*bool, bool)`

GetSunsetCommentsRequiredOk returns a tuple with the SunsetCommentsRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSunsetCommentsRequired

`func (o *GetCampaignV1200Response) SetSunsetCommentsRequired(v bool)`

SetSunsetCommentsRequired sets SunsetCommentsRequired field to given value.

### HasSunsetCommentsRequired

`func (o *GetCampaignV1200Response) HasSunsetCommentsRequired() bool`

HasSunsetCommentsRequired returns a boolean if a field has been set.

### GetSourceOwnerCampaignInfo

`func (o *GetCampaignV1200Response) GetSourceOwnerCampaignInfo() Campaign2AllOfSourceOwnerCampaignInfo`

GetSourceOwnerCampaignInfo returns the SourceOwnerCampaignInfo field if non-nil, zero value otherwise.

### GetSourceOwnerCampaignInfoOk

`func (o *GetCampaignV1200Response) GetSourceOwnerCampaignInfoOk() (*Campaign2AllOfSourceOwnerCampaignInfo, bool)`

GetSourceOwnerCampaignInfoOk returns a tuple with the SourceOwnerCampaignInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceOwnerCampaignInfo

`func (o *GetCampaignV1200Response) SetSourceOwnerCampaignInfo(v Campaign2AllOfSourceOwnerCampaignInfo)`

SetSourceOwnerCampaignInfo sets SourceOwnerCampaignInfo field to given value.

### HasSourceOwnerCampaignInfo

`func (o *GetCampaignV1200Response) HasSourceOwnerCampaignInfo() bool`

HasSourceOwnerCampaignInfo returns a boolean if a field has been set.

### SetSourceOwnerCampaignInfoNil

`func (o *GetCampaignV1200Response) SetSourceOwnerCampaignInfoNil(b bool)`

 SetSourceOwnerCampaignInfoNil sets the value for SourceOwnerCampaignInfo to be an explicit nil

### UnsetSourceOwnerCampaignInfo
`func (o *GetCampaignV1200Response) UnsetSourceOwnerCampaignInfo()`

UnsetSourceOwnerCampaignInfo ensures that no value is present for SourceOwnerCampaignInfo, not even an explicit nil
### GetSearchCampaignInfo

`func (o *GetCampaignV1200Response) GetSearchCampaignInfo() Campaign2AllOfSearchCampaignInfo`

GetSearchCampaignInfo returns the SearchCampaignInfo field if non-nil, zero value otherwise.

### GetSearchCampaignInfoOk

`func (o *GetCampaignV1200Response) GetSearchCampaignInfoOk() (*Campaign2AllOfSearchCampaignInfo, bool)`

GetSearchCampaignInfoOk returns a tuple with the SearchCampaignInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSearchCampaignInfo

`func (o *GetCampaignV1200Response) SetSearchCampaignInfo(v Campaign2AllOfSearchCampaignInfo)`

SetSearchCampaignInfo sets SearchCampaignInfo field to given value.

### HasSearchCampaignInfo

`func (o *GetCampaignV1200Response) HasSearchCampaignInfo() bool`

HasSearchCampaignInfo returns a boolean if a field has been set.

### SetSearchCampaignInfoNil

`func (o *GetCampaignV1200Response) SetSearchCampaignInfoNil(b bool)`

 SetSearchCampaignInfoNil sets the value for SearchCampaignInfo to be an explicit nil

### UnsetSearchCampaignInfo
`func (o *GetCampaignV1200Response) UnsetSearchCampaignInfo()`

UnsetSearchCampaignInfo ensures that no value is present for SearchCampaignInfo, not even an explicit nil
### GetRoleCompositionCampaignInfo

`func (o *GetCampaignV1200Response) GetRoleCompositionCampaignInfo() Campaign2AllOfRoleCompositionCampaignInfo`

GetRoleCompositionCampaignInfo returns the RoleCompositionCampaignInfo field if non-nil, zero value otherwise.

### GetRoleCompositionCampaignInfoOk

`func (o *GetCampaignV1200Response) GetRoleCompositionCampaignInfoOk() (*Campaign2AllOfRoleCompositionCampaignInfo, bool)`

GetRoleCompositionCampaignInfoOk returns a tuple with the RoleCompositionCampaignInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoleCompositionCampaignInfo

`func (o *GetCampaignV1200Response) SetRoleCompositionCampaignInfo(v Campaign2AllOfRoleCompositionCampaignInfo)`

SetRoleCompositionCampaignInfo sets RoleCompositionCampaignInfo field to given value.

### HasRoleCompositionCampaignInfo

`func (o *GetCampaignV1200Response) HasRoleCompositionCampaignInfo() bool`

HasRoleCompositionCampaignInfo returns a boolean if a field has been set.

### SetRoleCompositionCampaignInfoNil

`func (o *GetCampaignV1200Response) SetRoleCompositionCampaignInfoNil(b bool)`

 SetRoleCompositionCampaignInfoNil sets the value for RoleCompositionCampaignInfo to be an explicit nil

### UnsetRoleCompositionCampaignInfo
`func (o *GetCampaignV1200Response) UnsetRoleCompositionCampaignInfo()`

UnsetRoleCompositionCampaignInfo ensures that no value is present for RoleCompositionCampaignInfo, not even an explicit nil
### GetMachineAccountCampaignInfo

`func (o *GetCampaignV1200Response) GetMachineAccountCampaignInfo() Campaign2AllOfMachineAccountCampaignInfo`

GetMachineAccountCampaignInfo returns the MachineAccountCampaignInfo field if non-nil, zero value otherwise.

### GetMachineAccountCampaignInfoOk

`func (o *GetCampaignV1200Response) GetMachineAccountCampaignInfoOk() (*Campaign2AllOfMachineAccountCampaignInfo, bool)`

GetMachineAccountCampaignInfoOk returns a tuple with the MachineAccountCampaignInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMachineAccountCampaignInfo

`func (o *GetCampaignV1200Response) SetMachineAccountCampaignInfo(v Campaign2AllOfMachineAccountCampaignInfo)`

SetMachineAccountCampaignInfo sets MachineAccountCampaignInfo field to given value.

### HasMachineAccountCampaignInfo

`func (o *GetCampaignV1200Response) HasMachineAccountCampaignInfo() bool`

HasMachineAccountCampaignInfo returns a boolean if a field has been set.

### SetMachineAccountCampaignInfoNil

`func (o *GetCampaignV1200Response) SetMachineAccountCampaignInfoNil(b bool)`

 SetMachineAccountCampaignInfoNil sets the value for MachineAccountCampaignInfo to be an explicit nil

### UnsetMachineAccountCampaignInfo
`func (o *GetCampaignV1200Response) UnsetMachineAccountCampaignInfo()`

UnsetMachineAccountCampaignInfo ensures that no value is present for MachineAccountCampaignInfo, not even an explicit nil
### GetSourcesWithOrphanEntitlements

`func (o *GetCampaignV1200Response) GetSourcesWithOrphanEntitlements() []Campaign2AllOfSourcesWithOrphanEntitlements`

GetSourcesWithOrphanEntitlements returns the SourcesWithOrphanEntitlements field if non-nil, zero value otherwise.

### GetSourcesWithOrphanEntitlementsOk

`func (o *GetCampaignV1200Response) GetSourcesWithOrphanEntitlementsOk() (*[]Campaign2AllOfSourcesWithOrphanEntitlements, bool)`

GetSourcesWithOrphanEntitlementsOk returns a tuple with the SourcesWithOrphanEntitlements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourcesWithOrphanEntitlements

`func (o *GetCampaignV1200Response) SetSourcesWithOrphanEntitlements(v []Campaign2AllOfSourcesWithOrphanEntitlements)`

SetSourcesWithOrphanEntitlements sets SourcesWithOrphanEntitlements field to given value.

### HasSourcesWithOrphanEntitlements

`func (o *GetCampaignV1200Response) HasSourcesWithOrphanEntitlements() bool`

HasSourcesWithOrphanEntitlements returns a boolean if a field has been set.

### SetSourcesWithOrphanEntitlementsNil

`func (o *GetCampaignV1200Response) SetSourcesWithOrphanEntitlementsNil(b bool)`

 SetSourcesWithOrphanEntitlementsNil sets the value for SourcesWithOrphanEntitlements to be an explicit nil

### UnsetSourcesWithOrphanEntitlements
`func (o *GetCampaignV1200Response) UnsetSourcesWithOrphanEntitlements()`

UnsetSourcesWithOrphanEntitlements ensures that no value is present for SourcesWithOrphanEntitlements, not even an explicit nil
### GetMandatoryCommentRequirement

`func (o *GetCampaignV1200Response) GetMandatoryCommentRequirement() string`

GetMandatoryCommentRequirement returns the MandatoryCommentRequirement field if non-nil, zero value otherwise.

### GetMandatoryCommentRequirementOk

`func (o *GetCampaignV1200Response) GetMandatoryCommentRequirementOk() (*string, bool)`

GetMandatoryCommentRequirementOk returns a tuple with the MandatoryCommentRequirement field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMandatoryCommentRequirement

`func (o *GetCampaignV1200Response) SetMandatoryCommentRequirement(v string)`

SetMandatoryCommentRequirement sets MandatoryCommentRequirement field to given value.

### HasMandatoryCommentRequirement

`func (o *GetCampaignV1200Response) HasMandatoryCommentRequirement() bool`

HasMandatoryCommentRequirement returns a boolean if a field has been set.


