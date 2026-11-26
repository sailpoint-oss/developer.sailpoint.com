# Reassignment

# Reassignment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReassignedFrom** | Pointer to [**CertificationReference**](certification-reference) |  | [optional] 
**Comment** | Pointer to **string** | Comments from the previous reviewer. | [optional] 
**ReassignmentTrails** | Pointer to [**[]ReassignmentTrail**](reassignment-trail) | The reassignmentTrail | [optional] 

## Methods

### NewReassignment

`func NewReassignment() *Reassignment`

NewReassignment instantiates a new Reassignment object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReassignmentWithDefaults

`func NewReassignmentWithDefaults() *Reassignment`

NewReassignmentWithDefaults instantiates a new Reassignment object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReassignedFrom

`func (o *Reassignment) GetReassignedFrom() CertificationReference`

GetReassignedFrom returns the ReassignedFrom field if non-nil, zero value otherwise.

### GetReassignedFromOk

`func (o *Reassignment) GetReassignedFromOk() (*CertificationReference, bool)`

GetReassignedFromOk returns a tuple with the ReassignedFrom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReassignedFrom

`func (o *Reassignment) SetReassignedFrom(v CertificationReference)`

SetReassignedFrom sets ReassignedFrom field to given value.

### HasReassignedFrom

`func (o *Reassignment) HasReassignedFrom() bool`

HasReassignedFrom returns a boolean if a field has been set.

### GetComment

`func (o *Reassignment) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *Reassignment) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *Reassignment) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *Reassignment) HasComment() bool`

HasComment returns a boolean if a field has been set.

### GetReassignmentTrails

`func (o *Reassignment) GetReassignmentTrails() []ReassignmentTrail`

GetReassignmentTrails returns the ReassignmentTrails field if non-nil, zero value otherwise.

### GetReassignmentTrailsOk

`func (o *Reassignment) GetReassignmentTrailsOk() (*[]ReassignmentTrail, bool)`

GetReassignmentTrailsOk returns a tuple with the ReassignmentTrails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReassignmentTrails

`func (o *Reassignment) SetReassignmentTrails(v []ReassignmentTrail)`

SetReassignmentTrails sets ReassignmentTrails field to given value.

### HasReassignmentTrails

`func (o *Reassignment) HasReassignmentTrails() bool`

HasReassignmentTrails returns a boolean if a field has been set.


