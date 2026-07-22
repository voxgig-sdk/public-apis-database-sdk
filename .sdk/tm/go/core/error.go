package core

type PublicApisDatabaseError struct {
	IsPublicApisDatabaseError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewPublicApisDatabaseError(code string, msg string, ctx *Context) *PublicApisDatabaseError {
	return &PublicApisDatabaseError{
		IsPublicApisDatabaseError: true,
		Sdk:              "PublicApisDatabase",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *PublicApisDatabaseError) Error() string {
	return e.Msg
}
