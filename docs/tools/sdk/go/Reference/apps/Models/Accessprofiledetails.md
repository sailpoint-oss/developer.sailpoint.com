---
id: v1-accessprofiledetails
title: Accessprofiledetails
pagination_label: Accessprofiledetails
sidebar_label: Accessprofiledetails
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accessprofiledetails', 'V1Accessprofiledetails'] 
slug: /tools/sdk/go/apps/models/accessprofiledetails
tags: ['SDK', 'Software Development Kit', 'Accessprofiledetails', 'V1Accessprofiledetails']
---

# Accessprofiledetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The ID of the Access Profile | [optional] 
**Name** | Pointer to **string** | Name of the Access Profile | [optional] 
**Description** | Pointer to **NullableString** | Information about the Access Profile | [optional] 
**Created** | Pointer to **SailPointTime** | Date the Access Profile was created | [optional] 
**Modified** | Pointer to **SailPointTime** | Date the Access Profile was last modified. | [optional] 
**Disabled** | Pointer to **bool** | Whether the Access Profile is enabled. | [optional] [default to true]
**Requestable** | Pointer to **bool** | Whether the Access Profile is requestable via access request. | [optional] [default to false]
**Protected** | Pointer to **bool** | Whether the Access Profile is protected. | [optional] [default to false]
**OwnerId** | Pointer to **string** | The owner ID of the Access Profile | [optional] 
**SourceId** | Pointer to **NullableInt64** | The source ID of the Access Profile | [optional] 
**SourceName** | Pointer to **string** | The source name of the Access Profile | [optional] 
**AppId** | Pointer to **NullableInt64** | The source app ID of the Access Profile | [optional] 
**AppName** | Pointer to **NullableString** | The source app name of the Access Profile | [optional] 
**ApplicationId** | Pointer to **string** | The id of the application | [optional] 
**Type** | Pointer to **string** | The type of the access profile | [optional] 
**Entitlements** | Pointer to **[]string** | List of IDs of entitlements | [optional] 
**EntitlementCount** | Pointer to **int32** | The number of entitlements in the access profile | [optional] 
**Segments** | Pointer to **[]string** | List of IDs of segments, if any, to which this Access Profile is assigned. | [optional] 
**ApprovalSchemes** | Pointer to **string** | Comma-separated list of approval schemes. Each approval scheme is one of - manager - appOwner - sourceOwner - accessProfileOwner - workgroup:&lt;workgroupId&gt;  | [optional] 
**RevokeRequestApprovalSchemes** | Pointer to **string** | Comma-separated list of revoke request approval schemes. Each approval scheme is one of - manager - sourceOwner - accessProfileOwner - workgroup:&lt;workgroupId&gt;  | [optional] 
**RequestCommentsRequired** | Pointer to **bool** | Whether the access profile require request comment for access request. | [optional] [default to false]
**DeniedCommentsRequired** | Pointer to **bool** | Whether denied comment is required when access request is denied. | [optional] [default to false]
**AccountSelector** | Pointer to [**AccessprofiledetailsAccountSelector**](accessprofiledetails-account-selector) |  | [optional] 

## Methods

### NewAccessprofiledetails

`func NewAccessprofiledetails() *Accessprofiledetails`

NewAccessprofiledetails instantiates a new Accessprofiledetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessprofiledetailsWithDefaults

`func NewAccessprofiledetailsWithDefaults() *Accessprofiledetails`

NewAccessprofiledetailsWithDefaults instantiates a new Accessprofiledetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Accessprofiledetails) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Accessprofiledetails) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Accessprofiledetails) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Accessprofiledetails) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Accessprofiledetails) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Accessprofiledetails) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Accessprofiledetails) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Accessprofiledetails) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *Accessprofiledetails) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Accessprofiledetails) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Accessprofiledetails) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Accessprofiledetails) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *Accessprofiledetails) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *Accessprofiledetails) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetCreated

`func (o *Accessprofiledetails) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Accessprofiledetails) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Accessprofiledetails) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Accessprofiledetails) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *Accessprofiledetails) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Accessprofiledetails) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Accessprofiledetails) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Accessprofiledetails) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetDisabled

`func (o *Accessprofiledetails) GetDisabled() bool`

GetDisabled returns the Disabled field if non-nil, zero value otherwise.

### GetDisabledOk

`func (o *Accessprofiledetails) GetDisabledOk() (*bool, bool)`

GetDisabledOk returns a tuple with the Disabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisabled

`func (o *Accessprofiledetails) SetDisabled(v bool)`

SetDisabled sets Disabled field to given value.

### HasDisabled

`func (o *Accessprofiledetails) HasDisabled() bool`

HasDisabled returns a boolean if a field has been set.

### GetRequestable

`func (o *Accessprofiledetails) GetRequestable() bool`

GetRequestable returns the Requestable field if non-nil, zero value otherwise.

### GetRequestableOk

`func (o *Accessprofiledetails) GetRequestableOk() (*bool, bool)`

GetRequestableOk returns a tuple with the Requestable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestable

`func (o *Accessprofiledetails) SetRequestable(v bool)`

SetRequestable sets Requestable field to given value.

### HasRequestable

`func (o *Accessprofiledetails) HasRequestable() bool`

HasRequestable returns a boolean if a field has been set.

### GetProtected

`func (o *Accessprofiledetails) GetProtected() bool`

GetProtected returns the Protected field if non-nil, zero value otherwise.

### GetProtectedOk

`func (o *Accessprofiledetails) GetProtectedOk() (*bool, bool)`

GetProtectedOk returns a tuple with the Protected field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProtected

`func (o *Accessprofiledetails) SetProtected(v bool)`

SetProtected sets Protected field to given value.

### HasProtected

`func (o *Accessprofiledetails) HasProtected() bool`

HasProtected returns a boolean if a field has been set.

### GetOwnerId

`func (o *Accessprofiledetails) GetOwnerId() string`

GetOwnerId returns the OwnerId field if non-nil, zero value otherwise.

### GetOwnerIdOk

`func (o *Accessprofiledetails) GetOwnerIdOk() (*string, bool)`

GetOwnerIdOk returns a tuple with the OwnerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerId

`func (o *Accessprofiledetails) SetOwnerId(v string)`

SetOwnerId sets OwnerId field to given value.

### HasOwnerId

`func (o *Accessprofiledetails) HasOwnerId() bool`

HasOwnerId returns a boolean if a field has been set.

### GetSourceId

`func (o *Accessprofiledetails) GetSourceId() int64`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *Accessprofiledetails) GetSourceIdOk() (*int64, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *Accessprofiledetails) SetSourceId(v int64)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *Accessprofiledetails) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### SetSourceIdNil

`func (o *Accessprofiledetails) SetSourceIdNil(b bool)`

 SetSourceIdNil sets the value for SourceId to be an explicit nil

### UnsetSourceId
`func (o *Accessprofiledetails) UnsetSourceId()`

UnsetSourceId ensures that no value is present for SourceId, not even an explicit nil
### GetSourceName

`func (o *Accessprofiledetails) GetSourceName() string`

GetSourceName returns the SourceName field if non-nil, zero value otherwise.

### GetSourceNameOk

`func (o *Accessprofiledetails) GetSourceNameOk() (*string, bool)`

GetSourceNameOk returns a tuple with the SourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceName

`func (o *Accessprofiledetails) SetSourceName(v string)`

SetSourceName sets SourceName field to given value.

### HasSourceName

`func (o *Accessprofiledetails) HasSourceName() bool`

HasSourceName returns a boolean if a field has been set.

### GetAppId

`func (o *Accessprofiledetails) GetAppId() int64`

GetAppId returns the AppId field if non-nil, zero value otherwise.

### GetAppIdOk

`func (o *Accessprofiledetails) GetAppIdOk() (*int64, bool)`

GetAppIdOk returns a tuple with the AppId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppId

`func (o *Accessprofiledetails) SetAppId(v int64)`

SetAppId sets AppId field to given value.

### HasAppId

`func (o *Accessprofiledetails) HasAppId() bool`

HasAppId returns a boolean if a field has been set.

### SetAppIdNil

`func (o *Accessprofiledetails) SetAppIdNil(b bool)`

 SetAppIdNil sets the value for AppId to be an explicit nil

### UnsetAppId
`func (o *Accessprofiledetails) UnsetAppId()`

UnsetAppId ensures that no value is present for AppId, not even an explicit nil
### GetAppName

`func (o *Accessprofiledetails) GetAppName() string`

GetAppName returns the AppName field if non-nil, zero value otherwise.

### GetAppNameOk

`func (o *Accessprofiledetails) GetAppNameOk() (*string, bool)`

GetAppNameOk returns a tuple with the AppName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppName

`func (o *Accessprofiledetails) SetAppName(v string)`

SetAppName sets AppName field to given value.

### HasAppName

`func (o *Accessprofiledetails) HasAppName() bool`

HasAppName returns a boolean if a field has been set.

### SetAppNameNil

`func (o *Accessprofiledetails) SetAppNameNil(b bool)`

 SetAppNameNil sets the value for AppName to be an explicit nil

### UnsetAppName
`func (o *Accessprofiledetails) UnsetAppName()`

UnsetAppName ensures that no value is present for AppName, not even an explicit nil
### GetApplicationId

`func (o *Accessprofiledetails) GetApplicationId() string`

GetApplicationId returns the ApplicationId field if non-nil, zero value otherwise.

### GetApplicationIdOk

`func (o *Accessprofiledetails) GetApplicationIdOk() (*string, bool)`

GetApplicationIdOk returns a tuple with the ApplicationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplicationId

`func (o *Accessprofiledetails) SetApplicationId(v string)`

SetApplicationId sets ApplicationId field to given value.

### HasApplicationId

`func (o *Accessprofiledetails) HasApplicationId() bool`

HasApplicationId returns a boolean if a field has been set.

### GetType

`func (o *Accessprofiledetails) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Accessprofiledetails) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Accessprofiledetails) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Accessprofiledetails) HasType() bool`

HasType returns a boolean if a field has been set.

### GetEntitlements

`func (o *Accessprofiledetails) GetEntitlements() []string`

GetEntitlements returns the Entitlements field if non-nil, zero value otherwise.

### GetEntitlementsOk

`func (o *Accessprofiledetails) GetEntitlementsOk() (*[]string, bool)`

GetEntitlementsOk returns a tuple with the Entitlements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlements

`func (o *Accessprofiledetails) SetEntitlements(v []string)`

SetEntitlements sets Entitlements field to given value.

### HasEntitlements

`func (o *Accessprofiledetails) HasEntitlements() bool`

HasEntitlements returns a boolean if a field has been set.

### GetEntitlementCount

`func (o *Accessprofiledetails) GetEntitlementCount() int32`

GetEntitlementCount returns the EntitlementCount field if non-nil, zero value otherwise.

### GetEntitlementCountOk

`func (o *Accessprofiledetails) GetEntitlementCountOk() (*int32, bool)`

GetEntitlementCountOk returns a tuple with the EntitlementCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementCount

`func (o *Accessprofiledetails) SetEntitlementCount(v int32)`

SetEntitlementCount sets EntitlementCount field to given value.

### HasEntitlementCount

`func (o *Accessprofiledetails) HasEntitlementCount() bool`

HasEntitlementCount returns a boolean if a field has been set.

### GetSegments

`func (o *Accessprofiledetails) GetSegments() []string`

GetSegments returns the Segments field if non-nil, zero value otherwise.

### GetSegmentsOk

`func (o *Accessprofiledetails) GetSegmentsOk() (*[]string, bool)`

GetSegmentsOk returns a tuple with the Segments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSegments

`func (o *Accessprofiledetails) SetSegments(v []string)`

SetSegments sets Segments field to given value.

### HasSegments

`func (o *Accessprofiledetails) HasSegments() bool`

HasSegments returns a boolean if a field has been set.

### GetApprovalSchemes

`func (o *Accessprofiledetails) GetApprovalSchemes() string`

GetApprovalSchemes returns the ApprovalSchemes field if non-nil, zero value otherwise.

### GetApprovalSchemesOk

`func (o *Accessprofiledetails) GetApprovalSchemesOk() (*string, bool)`

GetApprovalSchemesOk returns a tuple with the ApprovalSchemes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalSchemes

`func (o *Accessprofiledetails) SetApprovalSchemes(v string)`

SetApprovalSchemes sets ApprovalSchemes field to given value.

### HasApprovalSchemes

`func (o *Accessprofiledetails) HasApprovalSchemes() bool`

HasApprovalSchemes returns a boolean if a field has been set.

### GetRevokeRequestApprovalSchemes

`func (o *Accessprofiledetails) GetRevokeRequestApprovalSchemes() string`

GetRevokeRequestApprovalSchemes returns the RevokeRequestApprovalSchemes field if non-nil, zero value otherwise.

### GetRevokeRequestApprovalSchemesOk

`func (o *Accessprofiledetails) GetRevokeRequestApprovalSchemesOk() (*string, bool)`

GetRevokeRequestApprovalSchemesOk returns a tuple with the RevokeRequestApprovalSchemes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevokeRequestApprovalSchemes

`func (o *Accessprofiledetails) SetRevokeRequestApprovalSchemes(v string)`

SetRevokeRequestApprovalSchemes sets RevokeRequestApprovalSchemes field to given value.

### HasRevokeRequestApprovalSchemes

`func (o *Accessprofiledetails) HasRevokeRequestApprovalSchemes() bool`

HasRevokeRequestApprovalSchemes returns a boolean if a field has been set.

### GetRequestCommentsRequired

`func (o *Accessprofiledetails) GetRequestCommentsRequired() bool`

GetRequestCommentsRequired returns the RequestCommentsRequired field if non-nil, zero value otherwise.

### GetRequestCommentsRequiredOk

`func (o *Accessprofiledetails) GetRequestCommentsRequiredOk() (*bool, bool)`

GetRequestCommentsRequiredOk returns a tuple with the RequestCommentsRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestCommentsRequired

`func (o *Accessprofiledetails) SetRequestCommentsRequired(v bool)`

SetRequestCommentsRequired sets RequestCommentsRequired field to given value.

### HasRequestCommentsRequired

`func (o *Accessprofiledetails) HasRequestCommentsRequired() bool`

HasRequestCommentsRequired returns a boolean if a field has been set.

### GetDeniedCommentsRequired

`func (o *Accessprofiledetails) GetDeniedCommentsRequired() bool`

GetDeniedCommentsRequired returns the DeniedCommentsRequired field if non-nil, zero value otherwise.

### GetDeniedCommentsRequiredOk

`func (o *Accessprofiledetails) GetDeniedCommentsRequiredOk() (*bool, bool)`

GetDeniedCommentsRequiredOk returns a tuple with the DeniedCommentsRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeniedCommentsRequired

`func (o *Accessprofiledetails) SetDeniedCommentsRequired(v bool)`

SetDeniedCommentsRequired sets DeniedCommentsRequired field to given value.

### HasDeniedCommentsRequired

`func (o *Accessprofiledetails) HasDeniedCommentsRequired() bool`

HasDeniedCommentsRequired returns a boolean if a field has been set.

### GetAccountSelector

`func (o *Accessprofiledetails) GetAccountSelector() AccessprofiledetailsAccountSelector`

GetAccountSelector returns the AccountSelector field if non-nil, zero value otherwise.

### GetAccountSelectorOk

`func (o *Accessprofiledetails) GetAccountSelectorOk() (*AccessprofiledetailsAccountSelector, bool)`

GetAccountSelectorOk returns a tuple with the AccountSelector field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountSelector

`func (o *Accessprofiledetails) SetAccountSelector(v AccessprofiledetailsAccountSelector)`

SetAccountSelector sets AccountSelector field to given value.

### HasAccountSelector

`func (o *Accessprofiledetails) HasAccountSelector() bool`

HasAccountSelector returns a boolean if a field has been set.


