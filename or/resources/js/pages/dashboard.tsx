import { Head } from '@inertiajs/react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
    },
];

const kpis = [
    {
        label: 'Active learners',
        value: '1,284',
        change: '+12% vs last month',
    },
    {
        label: 'Time to proficiency',
        value: '18.4 hrs',
        change: '-22% after adaptation',
    },
    {
        label: 'Repeat error loops',
        value: '9.8%',
        change: '-31% across flagged modules',
    },
    {
        label: 'Completion rate',
        value: '87%',
        change: '+14% cohort lift',
    },
];

const frictionAlerts = [
    {
        cohort: 'Surgical simulation cohort B',
        issue: 'High hesitation before instrument handoff step',
        impact: '43% of learners repeat the same transition.',
    },
    {
        cohort: 'Technical onboarding - analysts',
        issue: 'Dashboard configuration overload in module 3',
        impact: 'Drop-off increases after the first branching task.',
    },
    {
        cohort: 'Industrial certification',
        issue: 'Feedback timing is too delayed during recovery loops',
        impact: 'Users need 2.3 more attempts to recover successfully.',
    },
];

const learners = [
    {
        name: 'Maya Patel',
        profile: 'Visual cue dominant',
        status: 'On track',
        module: 'Remote surgery fundamentals',
    },
    {
        name: 'Jordan Lee',
        profile: 'Low-load pacing',
        status: 'Needs intervention',
        module: 'Industrial systems onboarding',
    },
    {
        name: 'Avery Chen',
        profile: 'Delayed summary feedback',
        status: 'Improving',
        module: 'Technical analyst certification',
    },
];

const experiments = [
    {
        name: 'Alternate sequence path A/B',
        result: 'Path B reduced abandonment by 18%',
    },
    {
        name: 'Immediate vs delayed feedback',
        result: 'Immediate cues improved early confidence by 11%',
    },
    {
        name: 'Low-density interface mode',
        result: 'Reduced correction loops in novice users',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="FlowPath Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto rounded-xl p-4">
                <section className="flex flex-col gap-3 rounded-2xl border border-sidebar-border/70 bg-background p-6 dark:border-sidebar-border">
                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                        <div className="space-y-2">
                            <Badge variant="secondary" className="w-fit">Adaptive training SaaS</Badge>
                            <h1 className="text-3xl font-semibold tracking-tight">FlowPath control center</h1>
                            <p className="max-w-3xl text-sm text-muted-foreground">
                                Monitor friction across your training programs, identify where learners stall,
                                and test better paths without rebuilding your curriculum from scratch.
                            </p>
                        </div>
                        <div className="grid gap-2 text-sm text-muted-foreground md:text-right">
                            <span>Primary wedge: simulation and technical onboarding teams</span>
                            <span>Current adaptation mode: behavior-first, no neuro-diagnostic claims</span>
                        </div>
                    </div>
                </section>

                <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                    {kpis.map((item) => (
                        <Card key={item.label}>
                            <CardHeader className="pb-2">
                                <CardDescription>{item.label}</CardDescription>
                                <CardTitle className="text-3xl">{item.value}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">{item.change}</p>
                            </CardContent>
                        </Card>
                    ))}
                </section>

                <section className="grid gap-4 xl:grid-cols-[1.5fr_1fr]">
                    <Card>
                        <CardHeader>
                            <CardTitle>Friction hotspots</CardTitle>
                            <CardDescription>
                                High-risk transitions detected across your most active programs.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {frictionAlerts.map((alert) => (
                                <div key={alert.cohort} className="rounded-xl border border-border p-4">
                                    <div className="flex items-center justify-between gap-3">
                                        <h3 className="font-medium">{alert.cohort}</h3>
                                        <Badge variant="outline">Friction alert</Badge>
                                    </div>
                                    <p className="mt-2 text-sm font-medium">{alert.issue}</p>
                                    <p className="mt-1 text-sm text-muted-foreground">{alert.impact}</p>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Active experiments</CardTitle>
                            <CardDescription>
                                A/B changes testing new sequence, feedback, and UI scaffolding choices.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {experiments.map((experiment) => (
                                <div key={experiment.name} className="rounded-xl border border-border p-4">
                                    <h3 className="font-medium">{experiment.name}</h3>
                                    <p className="mt-1 text-sm text-muted-foreground">{experiment.result}</p>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </section>

                <section className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
                    <Card>
                        <CardHeader>
                            <CardTitle>Learner profiles</CardTitle>
                            <CardDescription>
                                Simple MVP learner profiles based on observed performance and support style.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {learners.map((learner) => (
                                <div key={learner.name} className="flex flex-col gap-3 rounded-xl border border-border p-4 md:flex-row md:items-center md:justify-between">
                                    <div>
                                        <h3 className="font-medium">{learner.name}</h3>
                                        <p className="text-sm text-muted-foreground">{learner.module}</p>
                                    </div>
                                    <div className="grid gap-1 text-sm md:text-right">
                                        <span>{learner.profile}</span>
                                        <span className="text-muted-foreground">{learner.status}</span>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>MVP scope snapshot</CardTitle>
                            <CardDescription>
                                The first product slice aligned to the PRD in `idea.md`.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3 text-sm text-muted-foreground">
                            <div className="rounded-xl border border-border p-4">
                                Friction event logging across tasks and modules
                            </div>
                            <div className="rounded-xl border border-border p-4">
                                Adaptive sequence recommendations for managers
                            </div>
                            <div className="rounded-xl border border-border p-4">
                                Learner support profiles and intervention visibility
                            </div>
                            <div className="rounded-xl border border-border p-4">
                                Analytics summary for time-to-competency and repeat errors
                            </div>
                        </CardContent>
                    </Card>
                </section>
            </div>
        </AppLayout>
    );
}
