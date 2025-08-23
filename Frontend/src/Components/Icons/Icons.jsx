import * as  MuiIcons from '@mui/icons-material'

export default function Icons({ iconName }) {
    const IconsComp = MuiIcons[iconName]
    if (!IconsComp) {
        return null
    } else {
        return <IconsComp></IconsComp>
    }
}
