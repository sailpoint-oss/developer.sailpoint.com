---
id: v1-accessrequestitem
title: Accessrequestitem
pagination_label: Accessrequestitem
sidebar_label: Accessrequestitem
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accessrequestitem', 'V1Accessrequestitem'] 
slug: /tools/sdk/go/accessrequests/models/accessrequestitem
tags: ['SDK', 'Software Development Kit', 'Accessrequestitem', 'V1Accessrequestitem']
---

# Accessrequestitem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | The type of the item being requested. | 
**Id** | **string** | ID of Role, Access Profile or Entitlement being requested. | 
**Comment** | Pointer to **string** | Comment provided by requester. * Comment is required when the request is of type Revoke Access.  | [optional] 
**ClientMetadata** | Pointer to **map[string]string** | Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on associated APIs such as /account-activities and /access-request-status. | [optional] 
**StartDate** | Pointer to **SailPointTime** | The date and time the role or access profile or entitlement is/will be provisioned to the specified identity. Also known as the sunrise date. * Specify a date-time in the future. * This date-time can be used to indicate date-time when access item will be provisioned on the identity account. A GRANT_ACCESS request can use startDate to specify when to schedule provisioning of access item for an identity/account & a MODIFY_ACCESS request can use startDate to change the provisioning date-time of already assigned access item. But REVOKE_ACCESS request can not have startDate field. You can change the sunrise date in requests for yourself or others you are authorized to request for. * If the startDate is in the past, then the provisioning will be processed as soon as possible, but no guarantees can be made about when the provisioning will occur. If the startDate is in the future, then the provisioning will be scheduled to occur on that date and time. If no startDate is provided, then the provisioning will be processed as soon as possible.  | [optional] 
**RemoveDate** | Pointer to **SailPointTime** | The date and time the role or access profile or entitlement is no longer assigned to the specified identity. Also known as the expiration date. * Specify a date-time in the future. * The current SLA for the deprovisioning is 24 hours. * This date-time can be used to change the duration of an existing access item assignment for the specified identity. A GRANT_ACCESS request can extend duration or even remove an expiration date, and either a  GRANT_ACCESS or REVOKE_ACCESS request can reduce duration or add an expiration date where one has not previously been present. You can change the expiration date in requests for yourself or others you are authorized to request for.  | [optional] 
**AssignmentId** | Pointer to **NullableString** | The assignmentId for a specific role assignment on the identity. This id is used to revoke that specific roleAssignment on that identity. * For use with REVOKE_ACCESS requests for roles for identities with multiple accounts on a single source.  | [optional] 
**NativeIdentity** | Pointer to **NullableString** | The unique identifier for an account on the identity, designated as the account ID attribute in the source's account schema. This is used to revoke a specific attributeAssignment on the identity. * For use with REVOKE_ACCESS requests for entitlements for identities with multiple accounts on a single source.  | [optional] 

## Methods

### NewAccessrequestitem

`func NewAccessrequestitem(type_ string, id string, ) *Accessrequestitem`

NewAccessrequestitem instantiates a new Accessrequestitem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessrequestitemWithDefaults

`func NewAccessrequestitemWithDefaults() *Accessrequestitem`

NewAccessrequestitemWithDefaults instantiates a new Accessrequestitem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Accessrequestitem) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Accessrequestitem) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Accessrequestitem) SetType(v string)`

SetType sets Type field to given value.


### GetId

`func (o *Accessrequestitem) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Accessrequestitem) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Accessrequestitem) SetId(v string)`

SetId sets Id field to given value.


### GetComment

`func (o *Accessrequestitem) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *Accessrequestitem) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *Accessrequestitem) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *Accessrequestitem) HasComment() bool`

HasComment returns a boolean if a field has been set.

### GetClientMetadata

`func (o *Accessrequestitem) GetClientMetadata() map[string]string`

GetClientMetadata returns the ClientMetadata field if non-nil, zero value otherwise.

### GetClientMetadataOk

`func (o *Accessrequestitem) GetClientMetadataOk() (*map[string]string, bool)`

GetClientMetadataOk returns a tuple with the ClientMetadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientMetadata

`func (o *Accessrequestitem) SetClientMetadata(v map[string]string)`

SetClientMetadata sets ClientMetadata field to given value.

### HasClientMetadata

`func (o *Accessrequestitem) HasClientMetadata() bool`

HasClientMetadata returns a boolean if a field has been set.

### GetStartDate

`func (o *Accessrequestitem) GetStartDate() SailPointTime`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *Accessrequestitem) GetStartDateOk() (*SailPointTime, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *Accessrequestitem) SetStartDate(v SailPointTime)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *Accessrequestitem) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.

### GetRemoveDate

`func (o *Accessrequestitem) GetRemoveDate() SailPointTime`

GetRemoveDate returns the RemoveDate field if non-nil, zero value otherwise.

### GetRemoveDateOk

`func (o *Accessrequestitem) GetRemoveDateOk() (*SailPointTime, bool)`

GetRemoveDateOk returns a tuple with the RemoveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemoveDate

`func (o *Accessrequestitem) SetRemoveDate(v SailPointTime)`

SetRemoveDate sets RemoveDate field to given value.

### HasRemoveDate

`func (o *Accessrequestitem) HasRemoveDate() bool`

HasRemoveDate returns a boolean if a field has been set.

### GetAssignmentId

`func (o *Accessrequestitem) GetAssignmentId() string`

GetAssignmentId returns the AssignmentId field if non-nil, zero value otherwise.

### GetAssignmentIdOk

`func (o *Accessrequestitem) GetAssignmentIdOk() (*string, bool)`

GetAssignmentIdOk returns a tuple with the AssignmentId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssignmentId

`func (o *Accessrequestitem) SetAssignmentId(v string)`

SetAssignmentId sets AssignmentId field to given value.

### HasAssignmentId

`func (o *Accessrequestitem) HasAssignmentId() bool`

HasAssignmentId returns a boolean if a field has been set.

### SetAssignmentIdNil

`func (o *Accessrequestitem) SetAssignmentIdNil(b bool)`

 SetAssignmentIdNil sets the value for AssignmentId to be an explicit nil

### UnsetAssignmentId
`func (o *Accessrequestitem) UnsetAssignmentId()`

UnsetAssignmentId ensures that no value is present for AssignmentId, not even an explicit nil
### GetNativeIdentity

`func (o *Accessrequestitem) GetNativeIdentity() string`

GetNativeIdentity returns the NativeIdentity field if non-nil, zero value otherwise.

### GetNativeIdentityOk

`func (o *Accessrequestitem) GetNativeIdentityOk() (*string, bool)`

GetNativeIdentityOk returns a tuple with the NativeIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNativeIdentity

`func (o *Accessrequestitem) SetNativeIdentity(v string)`

SetNativeIdentity sets NativeIdentity field to given value.

### HasNativeIdentity

`func (o *Accessrequestitem) HasNativeIdentity() bool`

HasNativeIdentity returns a boolean if a field has been set.

### SetNativeIdentityNil

`func (o *Accessrequestitem) SetNativeIdentityNil(b bool)`

 SetNativeIdentityNil sets the value for NativeIdentity to be an explicit nil

### UnsetNativeIdentity
`func (o *Accessrequestitem) UnsetNativeIdentity()`

UnsetNativeIdentity ensures that no value is present for NativeIdentity, not even an explicit nil

