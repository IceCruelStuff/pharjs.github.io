import * as React from 'react'
import MaterialAppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import SettingsIcon from '@material-ui/icons/Settings'
import Collapse from '@material-ui/core/Slide'
import withWidth, { WithWidth, isWidthUp } from '@material-ui/core/withWidth'

import { withTranslation, WithTranslation } from 'react-i18next'
import { inject, observer } from 'mobx-react'
import { ConnectionStatusStore } from 'store/ConnectionStatus'

interface IProps extends WithWidth, WithTranslation {
  connectionStatusStore?: ConnectionStatusStore
  settingsClick(): void
}

const Header = ({
  connectionStatusStore,
  width,
  settingsClick,
  t,
}: IProps) =>
  <Collapse direction='down' in={true} timeout={1200}>
    <MaterialAppBar position='static'>
      <Toolbar>
        <Typography component='h1' variant='h6' color='inherit' style={{ flexGrow: 1 }}>
          PHAR {isWidthUp('sm', width) && ' ' + t('title')}
        </Typography>
        {connectionStatusStore.isOnline &&
          <Button
            color='inherit'
            onClick={() => window.open(homepageUrl, '_blank')} >
            GitHub
          </Button>}
        <IconButton
          color='inherit'
          aria-label='Pack settings'
          onClick={settingsClick}>
          <SettingsIcon />
        </IconButton>
      </Toolbar>
    </MaterialAppBar>
  </Collapse>

export default withWidth()(withTranslation()(inject('connectionStatusStore')(observer(Header))))
