
import BasicLayout from '@/layouts/BasicLayout'
import { Button, Grid, Tooltip, } from '@mantine/core';
import { Container, } from '@mantine/core'
import { createStyles, Card, Text, Group, RingProgress, rem } from '@mantine/core';
import {
  IconUser,
} from '@tabler/icons-react'

const useStyles = createStyles((theme) => ({
  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(38),
    lineHeight: 1,
    fontWeight: 600,
    gap: 0,

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(28),
    },
  },
  section: {
    padding: "30px 0px"
  },
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: 20,
    fontWeight: 600,
    padding: `${theme.spacing.sm} ${theme.spacing.lg}`,
    borderBottom: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
      }`,
  },

  titles: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
  },
  parentHead: {
    fontSize: 18,
    textDecoration: "underline",
    padding: "20px 0 0 0"
  },
  childtHead: {
    fontSize: 16,
    padding: "20px 0 5px 0",
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontWeight: 600
  },
  icon: {
    marginRight: 10,
    border: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
      }`,
    padding: 10,
    borderRadius: "50%"
  }
}))

export default function ProfilePage() {
  const { classes } = useStyles();

  return (
    <BasicLayout >
      <div style={{ padding: 15 }}>
        <Group noWrap className={classes.title}>
          <IconUser size="3rem" className={classes.icon} /> Profile
        </Group>
        <Grid className={classes.section}>
          <Grid.Col lg={6} md={6} sm={6} xs={12}>
            <Card withBorder padding="lg" className={classes.card}>
              <Card.Section className={classes.footer}>  <Text inherit variant="gradient" component="span">
                PWR Staking
              </Text>
              </Card.Section>
              <Text inherit component="h6" style={{ margin: "15px 0px", padding: 0 }} className={classes.parentHead}>
                Connect your wallet
              </Text>

              <Text inherit component="span" className={classes.childtHead}>
                Wallet
              </Text>
              <Group position="apart" mt="xl" style={{ margin: "10px 0px", }}>
                <Tooltip
                  label="Power is a digital asset used in a governance model to represent a share of
                  voting oower and decision-making
                  authority within a community."
                  width={220}
                  withArrow
                  multiline
                  position='bottom'
                >
                  <Text inherit variant="gradient" fz="sm" fw={700} className={classes.title}>
                    Power
                  </Text>
                </Tooltip>

                <Group spacing={5}>
                  <Text fz="xs" c="dimmed">
                    0 PWR
                  </Text>
                  <RingProgress size={18} sections={[{ value: 80, color: 'blue' }]} />
                </Group>
              </Group>
              <Group position="apart" mt="xl" style={{ margin: "10px 0px", }}>
                <Tooltip
                  label="Power is a digital asset used in a governance model to represent a share of
                  voting oower and decision-making
                  authority within a community."
                  width={220}
                  withArrow
                  multiline
                  position='bottom'
                >
                  <Text inherit variant="gradient" fz="sm" fw={700} className={classes.title}>
                    Waves
                  </Text>
                </Tooltip>
                <Group spacing={5}>
                  <Text fz="xs" c="dimmed">
                    0 WAVES
                  </Text>
                  <RingProgress size={18} sections={[{ value: 80, color: 'blue' }]} />
                </Group>
              </Group>
              {/* 2 */}
              <Text inherit component="span" className={classes.childtHead}>
                Staking
              </Text>
              <Group position="apart" mt="xl" style={{ margin: "10px 0px", }}>
                <Tooltip
                  label="Power is a digital asset used in a governance model to represent a share of
                  voting oower and decision-making
                  authority within a community."
                  width={220}
                  withArrow
                  multiline
                  position='bottom'
                >
                  <Text inherit variant="gradient" fz="sm" fw={700} className={classes.title}>
                    Staked
                  </Text>
                </Tooltip>
                <Group spacing={5}>
                  <Text fz="xs" c="dimmed">
                    0 PWR
                  </Text>
                  <RingProgress size={18} sections={[{ value: 80, color: 'blue' }]} />
                </Group>
              </Group>
              <Group position="apart" mt="xl" style={{ margin: "10px 0px", }}>
                <Tooltip
                  label="Power is a digital asset used in a governance model to represent a share of
                  voting oower and decision-making
                  authority within a community."
                  width={220}
                  withArrow
                  multiline
                  position='bottom'
                >
                  <Text inherit variant="gradient" fz="sm" fw={700} className={classes.title}>
                    Staking APR
                  </Text>
                </Tooltip>
                <Group spacing={5}>
                  <Text fz="xs" c="dimmed">
                    18.5% APR
                  </Text>
                  <RingProgress size={18} sections={[{ value: 80, color: 'blue' }]} />
                </Group>
              </Group>
              <Button variant="gradient" radius="xl" style={{ margin: "15px 0px 0px 0px", }}>
                STAKE / UNSTAKE
              </Button>
            </Card>
          </Grid.Col>
          <Grid.Col lg={6} md={6} sm={6} xs={12}>
            <Card withBorder padding="lg" className={classes.card}>
              <Card.Section className={classes.footer}>  <Text inherit variant="gradient" component="span">
                Airdrops
              </Text>
              </Card.Section>
              <Group position="apart" mt="xl" style={{ margin: "10px 0px", }}>
                <Tooltip
                  label="Power is a digital asset used in a governance model to represent a share of
                  voting oower and decision-making
                  authority within a community."
                  width={220}
                  withArrow
                  multiline
                  position='bottom'
                >
                  <Text inherit component="h6" style={{ margin: "15px 0px", padding: 0 }} className={classes.parentHead}>
                    Airdrop 0
                  </Text>
                </Tooltip>
                <Group spacing={5}>
                  <Text fz="xs" c="dimmed">
                    done
                  </Text>
                  <RingProgress size={18} sections={[{ value: 80, color: 'blue' }]} />
                </Group>
              </Group>

              <Group position="apart" mt="xl" style={{ margin: "10px 0px", }}>
                <Text inherit component="span" className={classes.childtHead}>
                  Airdrop 1
                </Text>
                <Group spacing={5}>
                  <Text fz="xs" c="dimmed">
                    March 17, 2023
                  </Text>
                  <RingProgress size={18} sections={[{ value: 80, color: 'blue' }]} />
                </Group>
              </Group>

              <Group position="apart" mt="xl" style={{ margin: "10px 0px", }}>
                <Text inherit variant="gradient" fz="sm" fw={700} className={classes.title}>
                  Claimable
                </Text>
                <Group spacing={5}>
                  <Text fz="xs" c="dimmed">
                    0 PWR
                  </Text>
                  <RingProgress size={18} sections={[{ value: 80, color: 'blue' }]} />
                </Group>
              </Group>
              <Group position="apart" mt="xl" style={{ margin: "10px 0px", }}>
                <Text inherit variant="gradient" fz="sm" fw={700} className={classes.title}>
                  Claimed
                </Text>
                <Group spacing={5}>
                  <Text fz="xs" c="dimmed">
                    0 WAVES
                  </Text>
                  <RingProgress size={18} sections={[{ value: 80, color: 'blue' }]} />
                </Group>
              </Group>
              <Button variant="gradient" radius="xl" style={{ margin: "15px 0px 20px 0px", }}>
                CLAIM AND UNSTAKE
              </Button>
              <br />
              {/* 2 */}
              <Group position="apart" mt="xl" style={{ margin: "10px 0px", }}>
                <Text inherit component="span" className={classes.childtHead}>
                  Airdrop 2
                </Text>
                <Group spacing={5}>
                  <Text fz="xs" c="dimmed">
                    April 5, 2023
                  </Text>
                  <RingProgress size={18} sections={[{ value: 80, color: 'blue' }]} />
                </Group>
              </Group>
              <Group position="apart" mt="xl" style={{ margin: "10px 0px", }}>
                <Text inherit variant="gradient" fz="sm" fw={700} className={classes.title}>
                  Claimable
                </Text>
                <Group spacing={5}>
                  <Text fz="xs" c="dimmed">
                    0 PWR
                  </Text>
                  <RingProgress size={18} sections={[{ value: 80, color: 'blue' }]} />
                </Group>
              </Group>
              <Group position="apart" mt="xl" style={{ margin: "10px 0px", }}>
                <Text inherit variant="gradient" fz="sm" fw={700} className={classes.title}>
                  Claimed
                </Text>
                <Group spacing={5}>
                  <Text fz="xs" c="dimmed">
                    18.5% APR
                  </Text>
                  <RingProgress size={18} sections={[{ value: 80, color: 'blue' }]} />
                </Group>
              </Group>
              <Button variant="gradient" radius="xl" style={{ margin: "15px 0px 0px 0px", }}>
                CLAIM AND UNSTAKE
              </Button>
            </Card>
          </Grid.Col>
        </Grid>
      </div>
    </BasicLayout>
  )
}
