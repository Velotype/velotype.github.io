import { type ChildrenAttr, type FunctionComponent, replaceElementWithRoot } from "@velotype/velotype"

type UserProfile = {
    name: string
    email?: string
    address?: string
}
type UserProfileAttrsType = {
    user: UserProfile
}

// A FunctionComponent takes attrs, and children as a second argument.
// It must be idempotent with no side effects, and it has no mount or unmount.
export const UserProfile: FunctionComponent<UserProfileAttrsType> = function(attrs: UserProfileAttrsType) {
    return <div>
        <div>Name: {attrs.user.name}</div>
        {attrs.user.email && <div>Email: {attrs.user.email}</div>}
        {attrs.user.address && <div>Address: {attrs.user.address}</div>}
    </div>
}

type PanelAttrsType = {title: string} & ChildrenAttr

export const Panel: FunctionComponent<PanelAttrsType> = function(attrs: PanelAttrsType, children) {
    return <section>
        <h2>{attrs.title}</h2>
        {children}
    </section>
}

replaceElementWithRoot(
    <Panel title="Profile">
        <UserProfile user={{name: "Ada", email: "ada@example.com"}}/>
    </Panel>,
    document.getElementById("app"),
)
