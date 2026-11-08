import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard, login, register } from '@/routes';

export default function Welcome({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
    const { auth } = usePage().props;

    return (
        <>
            <Head title="FlowPath">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>
            <div className="min-h-screen bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_35%,#f8fafc_100%)] text-slate-950 dark:bg-[#0a0a0a] dark:text-slate-50">
                <header className="mx-auto w-full max-w-6xl px-6 py-6 lg:px-8">
                    <nav className="flex items-center justify-between gap-4 text-sm">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white dark:bg-white dark:text-slate-950">
                                FP
                            </div>
                            <div>
                                <div className="font-semibold">FlowPath</div>
                                <div className="text-xs text-slate-500 dark:text-slate-400">
                                    Adaptive training that works with human constraints
                                </div>
                            </div>
                        </div>
                        {auth.user ? (
                            <Link
                                href={dashboard()}
                                className="inline-flex items-center rounded-full bg-slate-950 px-5 py-2 font-medium text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <div className="flex items-center gap-3">
                                <Link
                                    href={login()}
                                    className="inline-flex items-center rounded-full border border-slate-200 px-5 py-2 font-medium text-slate-700 transition hover:border-slate-300 hover:text-slate-950 dark:border-slate-800 dark:text-slate-200 dark:hover:border-slate-700 dark:hover:text-white"
                                >
                                    Log in
                                </Link>
                                {canRegister && (
                                    <Link
                                        href={register()}
                                        className="inline-flex items-center rounded-full bg-slate-950 px-5 py-2 font-medium text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
                                    >
                                        Book a Demo
                                    </Link>
                                )}
                            </div>
                        )}
                    </nav>
                </header>
                <main className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 py-10 lg:px-8 lg:py-16">
                    <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
                                Behavior-first adaptive training SaaS
                            </div>
                            <div className="space-y-5">
                                <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-balance sm:text-6xl">
                                    Training that adapts to how people actually learn
                                </h1>
                                <p className="max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                                    FlowPath identifies friction points in complex training, then reshapes sequence,
                                    pacing, feedback, and interface scaffolding so teams reduce stalled learning,
                                    repeated errors, and time-to-proficiency.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href={auth.user ? dashboard() : register()}
                                    className="inline-flex items-center rounded-full bg-slate-950 px-6 py-3 font-medium text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
                                >
                                    {auth.user ? 'Open Dashboard' : 'Book a Demo'}
                                </Link>
                                <Link
                                    href={auth.user ? dashboard() : login()}
                                    className="inline-flex items-center rounded-full border border-slate-200 bg-white px-6 py-3 font-medium text-slate-700 transition hover:border-slate-300 hover:text-slate-950 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:hover:border-slate-700 dark:hover:text-white"
                                >
                                    {auth.user ? 'View Analytics' : 'See the Product'}
                                </Link>
                            </div>
                            <div className="grid gap-6 sm:grid-cols-3">
                                <div>
                                    <div className="text-3xl font-semibold">18%</div>
                                    <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                                        Lower abandonment in alternate sequence tests
                                    </div>
                                </div>
                                <div>
                                    <div className="text-3xl font-semibold">31%</div>
                                    <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                                        Fewer repeat error loops in flagged modules
                                    </div>
                                </div>
                                <div>
                                    <div className="text-3xl font-semibold">22%</div>
                                    <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                                        Faster time-to-proficiency after adaptation
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.35)] dark:border-slate-800 dark:bg-slate-950">
                            <div className="grid gap-4">
                                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-900 dark:bg-emerald-950/40">
                                    <div className="text-sm font-medium text-emerald-700 dark:text-emerald-300">Observe</div>
                                    <div className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                                        Capture timing, retries, hesitation, and task abandonment across each module.
                                    </div>
                                </div>
                                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900 dark:bg-amber-950/40">
                                    <div className="text-sm font-medium text-amber-700 dark:text-amber-300">Diagnose</div>
                                    <div className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                                        Detect high-friction transitions, overload states, and avoidable failure loops.
                                    </div>
                                </div>
                                <div className="rounded-2xl border border-sky-200 bg-sky-50 p-5 dark:border-sky-900 dark:bg-sky-950/40">
                                    <div className="text-sm font-medium text-sky-700 dark:text-sky-300">Adapt</div>
                                    <div className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                                        Personalize sequence, feedback, and interface structure using observable performance signals.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="grid gap-6 md:grid-cols-3">
                        <div className="rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-950">
                            <h2 className="text-xl font-semibold">Find learning friction early</h2>
                            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                                FlowPath maps the places where learners hesitate, loop, overload, or disengage so you can fix the path instead of blaming the learner.
                            </p>
                        </div>
                        <div className="rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-950">
                            <h2 className="text-xl font-semibold">Adapt the task, not the person</h2>
                            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                                Adjust sequence, pacing, prompts, and information density using measurable performance signals rather than speculative neural claims.
                            </p>
                        </div>
                        <div className="rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-950">
                            <h2 className="text-xl font-semibold">Prove ROI with analytics</h2>
                            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                                Track time-to-competency, completion, intervention impact, and repeat error reduction across cohorts and modules.
                            </p>
                        </div>
                    </section>
                    <section className="grid gap-8 rounded-[2rem] border border-slate-200 bg-slate-950 px-8 py-10 text-white dark:border-slate-800">
                        <div className="grid gap-8 lg:grid-cols-2">
                            <div>
                                <p className="text-sm uppercase tracking-[0.2em] text-slate-300">How it works</p>
                                <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                                    From telemetry to better training paths
                                </h2>
                            </div>
                            <p className="text-sm leading-7 text-slate-300">
                                Built for simulation teams, technical onboarding, industrial training, and neuro-inclusive workflow design. Start with observable behavior. Improve the learning environment. Measure what changes.
                            </p>
                        </div>
                        <div className="grid gap-4 md:grid-cols-4">
                            <div className="rounded-2xl border border-white/10 p-5">
                                <div className="text-sm font-medium text-slate-300">1. Observe</div>
                                <p className="mt-2 text-sm text-slate-400">Capture performance telemetry across each training task.</p>
                            </div>
                            <div className="rounded-2xl border border-white/10 p-5">
                                <div className="text-sm font-medium text-slate-300">2. Diagnose</div>
                                <p className="mt-2 text-sm text-slate-400">Identify high-friction transitions and stuck states.</p>
                            </div>
                            <div className="rounded-2xl border border-white/10 p-5">
                                <div className="text-sm font-medium text-slate-300">3. Adapt</div>
                                <p className="mt-2 text-sm text-slate-400">Recommend better sequence, pacing, and feedback choices.</p>
                            </div>
                            <div className="rounded-2xl border border-white/10 p-5">
                                <div className="text-sm font-medium text-slate-300">4. Improve</div>
                                <p className="mt-2 text-sm text-slate-400">Track ramp time, completion, and intervention impact.</p>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}
